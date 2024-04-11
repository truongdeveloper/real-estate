import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import React, { useEffect, useState } from "react";
import DeleteModal from "../../../Common/modals/DeleteModal";
import { toast } from "react-toastify";
import { BatDongSan } from "../../../Models/common";
import listImg_1 from "@/assets/images/dashboard/img_01.jpg";
import {
  getNameOfDistrict,
  getNameOfProvince,
} from "../../../Constants/conversionAdress";
import transformPriceToString from "../../../Constants/conversionNumberToPrice";
import conversionRealEstateStatus from "../../../Constants/conversionRealEstateStatus";
import ConfirmModal from "../../../Common/modals/ConfirmModal";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import OpenProperty from "./OpenProperty";

type IPropertyTableRow = {
  item: BatDongSan;
};

const PropertyTableRow = ({ item }: IPropertyTableRow) => {
  const [confirmChangeStatusTrue, setConfirmChangeStatusTrue] = useState(false);
  const [confirmChangeStatusFalse, setConfirmChangeStatusFalse] =
    useState(false);

  const [showDetail, setShowDetail] = useState(false);
  function handleToggleDetail() {
    setShowDetail(!showDetail);
  }

  const [districtName, setDistrictName] = useState("");

  useEffect(() => {
    getNameOfDistrict(item.viTri.quanHuyen, item.viTri.tinhTp).then((data) => {
      if (data) {
        setDistrictName(data);
      }
    });
  }, [item]);

  function handleChangeStatusTrue() {
    toast(`Xóa thành công ${item.tenBDS}`);
  }

  function handleChangeStatusFalse() {
    toast(`Xóa thành công ${item.tenBDS}`);
  }

  function handleDeleteProperty() {
    toast(`Xóa thành công ${item.tenBDS}`);
  }

  return (
    <React.Fragment>
      <tr key={item.id}>
        <td>
          <div className="d-lg-flex align-items-center position-relative">
            {item?.hinhAnhList[0].url ? (
              <Image
                src={item.hinhAnhList[0].url}
                alt=""
                width={200}
                height={200}
                className="p-img"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = listImg_1;
                }}
              />
            ) : (
              <Image
                src={listImg_1}
                alt="Landscape picture"
                width={200}
                height={200}
                className="p-img"
              />
            )}
            <div className="ps-lg-4 md-pt-10">
              <Link
                href="#"
                className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
              >
                {item.tenBDS}
              </Link>
              <div className="address">
                {districtName}, {getNameOfProvince(item.viTri.tinhTp)}
              </div>
              <strong className="price color-dark">
                {transformPriceToString(item.giaThue)}
              </strong>
            </div>
          </div>
        </td>
        <td>{item.loaiBDS.tenLoaiBDS}</td>
        <td>
          {item.dienTich}m<sup>2</sup>
        </td>
        <td>
          <div
            className={`property-status ${
              item.trangThai == 1 ? "" : "processing"
            }`}
          >
            {conversionRealEstateStatus(item.trangThai)}
          </div>
        </td>
        <td>
          <div className="action-dots d-flex align-items-center gap-2 ">
            {item.trangThai == 0 && (
              <button
                className="action-btn btn"
                type="button"
                onClick={() => setConfirmChangeStatusFalse(true)}
              >
                <i className="fa-solid fa-check text-success fs-4"></i>
              </button>
            )}
            {item.trangThai == 1 && (
              <button
                className="action-btn btn"
                type="button"
                onClick={() => setConfirmChangeStatusTrue(true)}
              >
                <i className="fa-solid fa-xmark text-danger fs-4"></i>
              </button>
            )}
            <button
              className="action-btn btn fs-4"
              type="button"
              onClick={() => setShowDetail(true)}
            >
              <i className="fa-regular fa-square-plus"></i>
            </button>
            <button
              className="action-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" href="#">
                  <Image src={icon_1} alt="" className="lazy-img" /> View
                </Link>
              </li>
              {/* <li>
                <Link className="dropdown-item" href="#">
                  <Image src={icon_3} alt="" className="lazy-img" /> Edit
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setModalDeleteOpen(true);
                  }}
                  className="dropdown-item text-danger"
                >
                  <Image src={icon_4} alt="" className="lazy-img" /> Delete
                </button>
              </li> */}
            </ul>
          </div>
        </td>
      </tr>
      <ConfirmModal
        isOpen={confirmChangeStatusTrue}
        setIsOpen={setConfirmChangeStatusTrue}
        center
        title="Thay đổ trạng thái thành chưa cho thuê?"
        content="Bất động sản này sẽ chuyển thành trạng thái đã cho thuê"
        handleAcceptEvent={handleChangeStatusTrue}
      />
      <ConfirmModal
        isOpen={confirmChangeStatusFalse}
        setIsOpen={setConfirmChangeStatusFalse}
        center
        title="Thay đổ trạng thái thành đã cho thuê?"
        content="Bất động sản này sẽ chuyển thành trạng thái đã cho thuê"
        handleAcceptEvent={handleChangeStatusFalse}
      />
      <Offcanvas
        isOpen={showDetail}
        toggle={handleToggleDetail}
        direction="end"
        className="offcanvas-detail"
      >
        <OffcanvasHeader toggle={handleToggleDetail}>
          Chi tiết Bất động sản
        </OffcanvasHeader>
        <OffcanvasBody>
          <OpenProperty item={item} />
        </OffcanvasBody>
      </Offcanvas>
    </React.Fragment>
  );
};

export default PropertyTableRow;
