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

const dataProperty = [
  {
    id: 8,
    maLoaiBDS: 1,
    maViTri: 27,
    maTienNghi: 27,
    maTKThue: null,
    tenBDS: "Tên BDS 3",
    dienTich: 150.0,
    giaThue: 250.0,
    trangThai: 1,
    diaChi: "xóm 3",
    phongNgu: 3,
    phongTam: 2,
    phongBep: 1,
    soTang: 3,
    namXayDung: 3,
    moTa: "Mô tả 3",
    kinhDo: 3.0,
    viDo: 3.0,
    loaiBDS: {
      id: 1,
      tenLoaiBDS: "Nhà riêng",
    },
    viTri: {
      id: 27,
      tinhTp: "12",
      quanHuyen: "095",
      xaPhuong: "3",
    },
    hinhAnhList: [
      {
        id: 51,
        maBDS: 8,
        url: "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712592414/dev/ptrm4zdgmkkfkub2bje2.png",
      },
      {
        id: 52,
        maBDS: 8,
        url: "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712592414/dev/ptrm4zdgmkkfkub2bje2.png",
      },
    ],
    tienNghi: {
      id: 27,
      tuLanh: 1,
      mayGiat: 1,
      hoBoi: 0,
      wifi: 1,
      baiDoXe: 1,
      thangMay: 1,
      vuon: 0,
      gara: 0,
    },
  },
  {
    id: 9,
    maLoaiBDS: 2,
    maViTri: 28,
    maTienNghi: 28,
    maTKThue: {
      maTk: 14,
      tenTK: "456456",
      hoVaTen: "Nguyễn Thị Minh Khai",
      anhDaiDien: "4567",
    },
    tenBDS: "Tên BDS 4",
    dienTich: 180.0,
    giaThue: 300.0,
    trangThai: 0,
    diaChi: "xóm 4",
    phongNgu: 2,
    phongTam: 1,
    phongBep: 1,
    soTang: 2,
    namXayDung: 2,
    moTa: "Mô tả 4",
    kinhDo: 4.0,
    viDo: 4.0,
    loaiBDS: {
      id: 2,
      tenLoaiBDS: "Căn hộ chung cư",
    },
    viTri: {
      id: 28,
      tinhTp: "13",
      quanHuyen: "096",
      xaPhuong: "4",
    },
    hinhAnhList: [
      {
        id: 53,
        maBDS: 9,
        url: "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712592414/dev/ptrm4zdgmkkfkub2bje2.png",
      },
      {
        id: 54,
        maBDS: 9,
        url: "https://res.cloudinary.com/dfkh87pvy/image/upload/v1712592414/dev/ptrm4zdgmkkfkub2bje2.png",
      },
    ],
    tienNghi: {
      id: 28,
      tuLanh: 1,
      mayGiat: 0,
      hoBoi: 1,
      wifi: 1,
      baiDoXe: 0,
      thangMay: 1,
      vuon: 0,
      gara: 1,
    },
  },
];

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
        trangThai: tabStatus,
      },
      token: data?.user.token,
    })
      ?.then((res) => {
        if (res) {
          setTotalPage(res.tongSoTrang);
          setListData(
            res.danhSach.map((item: any) => ({ ...item.batDongSan }))
          );
        }
      })
      .catch((error) => {
        toast(error?.message);
      });
  }, [tabStatus, page, data?.user]);
  console.table(listData);

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
            Hiện <span className="color-dark fw-500"></span> of{" "}
            <span className="color-dark fw-500">40</span> results
          </div>
          <div className="d-flex ms-auto xs-mt-30">
            <ButtonGroup className="d-flex ms-auto xs-mt-30">
              <Button
                outline
                className={`${tabStatus === 0 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(0)}
              >
                Tất cả
              </Button>
              <Button
                outline
                className={`${tabStatus === 1 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(1)}
              >
                Chưa cho thuê
              </Button>
              <Button
                outline
                className={`${tabStatus === 2 ? "btn-two" : "btn-one"} `}
                onClick={() => handleTabsChange(2)}
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
                  <th scope="col">Ngày đăng</th>
                  <th scope="col">Hết hạn</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {!isEmpty(listData) ? (
                  listData
                    // .toReversed()
                    .map((item) => (
                      <PropertyTableRow key={uniqueId()} item={item} />
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
