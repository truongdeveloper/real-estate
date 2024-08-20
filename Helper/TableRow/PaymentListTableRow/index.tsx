import Image from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/images/dashboard/icon/icon_18.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_20.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_21.svg";
import React, { useState } from "react";
import { itemListPayment } from "../../../Models/common";
import conversionDate from "../../../Constants/conversionDate";
import {
  conversionStatusPayment,
  conversionTypePayment,
} from "../../../Constants/conversionStatusPayment";

const PaymentListTableRow = ({ item }: { item: itemListPayment }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  return (
    <React.Fragment>
      <tr key={item.id}>
        <td>
          <div className="d-lg-flex align-items-center position-relative">
            {/* <Image src={item.img} alt="" className="p-img" /> */}
            <div className="ps-lg-4 md-pt-10">{item.id}</div>
          </div>
        </td>

        <td>{conversionTypePayment(item.loaiThanhToan)}</td>
        <td>{conversionDate(item.thoiGian).formattedDate}</td>
        <td>
          <div
            className={`property-status ${
              item.trangThai?.trim() == "00" ? "" : "pending"
            } fw-500`}
          >
            {conversionStatusPayment(item.trangThai)}
          </div>
        </td>
        <td>
          <div>
            <div className="text-success fw-700 fs-5">
              {item.tongTien.toLocaleString("vi-VN")}đ
            </div>
          </div>
        </td>
        <td>
          <button onClick={() => {}}>
            <span>Chi tiết</span>
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default PaymentListTableRow;
