"use client";

import Image from "next/image";

import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import SelectCustom from "../../../Helper/ui/SelectCustom";
import PropertyTableRow from "../../../Helper/TableRow/PropertyTableRow";
import { list_data } from "../post-list/PropertyTableBody";
import { isEmpty, uniqueId } from "lodash";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import icon from "@/assets/images/icon/icon_46.svg";
import { useSession } from "next-auth/react";
import { BatDongSan } from "../../../Models/common";
import axiosService from "../../../Common/api/AxiosServices";
import { Button, ButtonGroup } from "reactstrap";
import { GET_POST_FOR_USER } from "../../../Common/api/apiEndPoints";

const PropertyListBody = () => {
  const LIMIT_PAGE = 20;
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const { data } = useSession();
  const selectHandler = (e: any) => {};

  const [listData, setListData] = useState<BatDongSan[]>([]);
  const [tabStatus, setTabStatus] = useState(1);

  useEffect(() => {
    axiosService({
      url: GET_POST_FOR_USER.url,
      method: "get",
      params: {
        maTK: data?.user.id,
        trang: page,
        kichThuoc: LIMIT_PAGE,
        trangThai: 2,
      },
      token: data?.user.token,
    })
      ?.then((res) => {
        if (res) {
          setTotalPage(res.tongSoTrang);

          setListData(
            res.danhSach
              .map((item: any) => ({
                ...item.batDongSan,
              }))
              .filter((item: any) => item.trangThai == tabStatus)
          );
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
        <DashboardHeader title="Bài đăng" />
        <h2 className="main-title d-block d-lg-none">Bài đăng</h2>

        <div className="d-sm-flex align-items-center justify-content-between mb-25">
          <div className="fs-16">
            Hiện <span className="color-dark fw-500"></span>
            <span className="color-dark fw-500">{listData.length}</span> kết quả
          </div>
          <div className="d-flex ms-auto xs-mt-30">
            <ButtonGroup className="d-flex ms-auto xs-mt-30">
              {/* <Button
                outline
                className={`${tabStatus === 3 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(3)}
              >
                Tất cả
              </Button> */}
              <Button
                outline
                className={`${tabStatus === 0 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(0)}
              >
                Chưa cho thuê
              </Button>
              <Button
                outline
                className={`${tabStatus === 1 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(1)}
              >
                Cho thuê
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
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Loại BĐS</th>
                  <th scope="col">Diện tích</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {!isEmpty(listData) ? (
                  listData
                    .toReversed()
                    .map((item) => (
                      <PropertyTableRow key={uniqueId()} item={item} />
                    ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center fs-4 black">
                      Không có Bất động sản nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
  );
};

export default PropertyListBody;
