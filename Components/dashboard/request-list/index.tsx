"use client";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_46.svg";
import { isEmpty } from "lodash";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";

import { uniqueId } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";
import { useSession } from "next-auth/react";
import axiosService from "../../../Common/api/AxiosServices";
import RequestListTableRow from "../../../Helper/TableRow/RequestListTableRow";
import { typeRequest } from "../../../Models/common";
import { GET_REQUEST_FOR_USER } from "../../../Common/api/apiEndPoints";

const RequestListBody = () => {
  const LIMIT_PAGE = 20;
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const { data } = useSession();
  const selectHandler = (e: any) => {};

  const [listData, setListData] = useState<typeRequest[]>([]);
  const [tabStatus, setTabStatus] = useState(0);

  useEffect(() => {
    axiosService({
      url: GET_REQUEST_FOR_USER.url,
      method: "get",
      params: {
        maTK: data?.user.id,
        trang: page,
        kichThuoc: LIMIT_PAGE,
        trangThai: tabStatus,
      },
      token: data?.user.token,
    })
      ?.then((res) => {
        if (res) {
          setTotalPage(res.tongSoTrang);
          setListData(res.danhSach);
        }
      })
      .catch((error) => {
        toast(error?.message);
      });
  }, [tabStatus, page, data?.user]);

  function handlePageClick(page: any) {
    setPage(page.selected);
  }
  function handleTabsChange(tabs: number) {
    setPage(0);
    setTabStatus(tabs);
  }

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Yêu cầu thuê" />
        <h2 className="main-title d-block d-lg-none">Yêu cầu thuê</h2>

        <div className="d-sm-flex align-items-center justify-content-between mb-25">
          <div className="fs-16">
            Showing <span className="color-dark fw-500">1–5</span> of{" "}
            <span className="color-dark fw-500">40</span> results
          </div>
          <div className="d-flex ms-auto xs-mt-30">
            <ButtonGroup>
              <Button
                outline
                className={`${tabStatus === 0 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(0)}
              >
                Chưa xử lý
              </Button>
              <Button
                outline
                className={`${tabStatus === 1 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(1)}
              >
                Từ chối
              </Button>
              <Button
                outline
                className={`${tabStatus === 2 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(2)}
              >
                Chấp nhận
              </Button>
            </ButtonGroup>
            {/* <div className="short-filter d-flex align-items-center ms-sm-auto">
              <div className="fs-16 me-2">Short by:</div>
              <SelectCustom
                className="nice-select"
                options={[
                  { value: "1", text: "Newest" },
                  { value: "2", text: "Best Seller" },
                  { value: "3", text: "Best Match" },
                  { value: "4", text: "Price Low" },
                  { value: "5", text: "Price High" },
                ]}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                placeholder=""
              />
            </div> */}
          </div>
        </div>

        <div className="bg-white card-box p0 border-20">
          <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
            <table className="table property-list-table">
              <thead>
                <tr>
                  <th scope="col">Người dùng</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Nội dung</th>
                  <th scope="col">Thời gian</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {!isEmpty(listData) ? (
                  listData
                    .toReversed()
                    .map((item) => (
                      <RequestListTableRow key={uniqueId()} item={item} />
                    ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center fs-4 black">
                      Không có bài đăng nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Image src={icon} alt="" className="ms-2" />}
          onPageChange={handlePageClick}
          pageCount={totalPage}
          forcePage={page}
          previousLabel={<Image src={icon} alt="" className="ms-2" />}
          renderOnZeroPageCount={null}
          className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30"
        />
      </div>
    </div>
  );
};

export default RequestListBody;
