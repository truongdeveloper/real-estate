import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import React, { useState } from "react";
import DeleteModal from "../../../Common/modals/DeleteModal";
import { toast } from "react-toastify";

const RequestListTableRow = ({ item }: any) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  function handleDeletePost() {
    toast(`Xóa thành công ${item.title}`);
  }

  return (
    <React.Fragment>
      <tr key={item.id}>
        <td>
          <div className="d-lg-flex align-items-center position-relative">
            <Image src={item.img} alt="" className="p-img" />
            <div className="ps-lg-4 md-pt-10">
              <Link
                href="#"
                className="property-name tran3s color-dark fw-500 fs-20 stretched-link"
              >
                {item.title}
              </Link>
              <div className="address">{item.address}</div>
              <strong className="price color-dark">${item.price}</strong>
            </div>
          </div>
        </td>
        <td>{item.date}</td>
        <td>{item.view}</td>
        <td>
          <div className={`property-status ${item.status_bg}`}>
            {item.status}
          </div>
        </td>
        <td>
          <div className="action-dots float-end">
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
              <li>
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
    </React.Fragment>
  );
};

export default RequestListTableRow;
