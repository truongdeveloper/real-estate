import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import React, { useState } from "react";
import DeleteModal from "../../../Common/modals/DeleteModal";
import { toast } from "react-toastify";
import { typeRequest } from "../../../Models/common";
import conversionDate from "../../../Constants/conversionDate";
import timeAgo from "../../../Constants/conversionTime";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import OpenRequest from "../../../Components/dashboard/request-list/OpenRequest";
import { ACCEPT_REQUEST } from "../../../Common/api/apiEndPoints";
import axiosService from "../../../Common/api/AxiosServices";

type IRequestTabelRow = {
  item: typeRequest;
};
const RequestListTableRow = ({ item }: IRequestTabelRow) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  function handleDeletePost() {
    toast(`Xóa thành công ${item.tieuDe}`);
  }

  function handleToggleDetail() {
    setShowDetail(!showDetail);
  }

  const handleAccept = () => {
    axiosService({
      url: ACCEPT_REQUEST.url,
      method: "put",
      body: {
        maBDS: item.maBD,
        maTKThue: item.maTK,
      },
    })?.then((res) => {
      toast(res);
    });
  };
  const handleReject = () => {
    toast("Huy bán");
  };

  return (
    <React.Fragment>
      <tr key={item.maYC}>
        <td>
          <div className="d-lg-flex align-items-center position-relative">
            <Image
              src={icon_1}
              alt=""
              className=" p-img"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <div className="ps-lg-4 md-pt-10">
              <Link
                href={`/user-profile?id=${item.maTK}`}
                className="property-name tran3s color-dark fw-500 fs-16 stretched-link"
              >
                {item.taiKhoan.hoTen}
              </Link>
              <div className="address">{item.taiKhoan.tenTaiKhoan}</div>
              {/* <strong className="price color-dark">${item.price}</strong> */}
            </div>
          </div>
        </td>

        <td>
          <strong style={{ color: "black" }} className="title-request-slice">
            {item.tieuDe}
          </strong>
        </td>
        <td>
          <div className={`content-request-slice`}>{item.noiDung}</div>
        </td>
        <td>
          <strong style={{ color: "black", fontSize: "16px", fontWeight: 500 }}>
            {timeAgo(item.thoiGian)}
          </strong>
          <p>{conversionDate(item.thoiGian).formattedDate}</p>
        </td>
        <td>
          <div className="action-dots d-flex align-items-center gap-3">
            <div>
              <button color="primary" onClick={() => setShowDetail(true)}>
                <i className="fa-solid fa-expand fs-5"></i>
              </button>
            </div>
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
                <button
                  onClick={() => {
                    setModalDeleteOpen(true);
                  }}
                  className="dropdown-item text-danger"
                >
                  <Image src={icon_4} alt="" className="lazy-img" /> Delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <DeleteModal
        setIsOpen={setModalDeleteOpen}
        isOpen={modalDeleteOpen}
        handleAcceptEvent={handleDeletePost}
        args={{ centered: true }}
      />
      <Offcanvas
        isOpen={showDetail}
        toggle={handleToggleDetail}
        // scrollable
        direction="end"
        className="offcanvas-detail"
      >
        <OffcanvasHeader toggle={handleToggleDetail}>
          Yêu cầu thuê
        </OffcanvasHeader>
        <OffcanvasBody>
          <OpenRequest
            item={item}
            handleAccept={handleAccept}
            handleReject={handleReject}
          />
        </OffcanvasBody>
      </Offcanvas>
    </React.Fragment>
  );
};

export default RequestListTableRow;
