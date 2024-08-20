import Image from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/images/dashboard/logo_02.png";
import icon_1 from "@/assets/images/dashboard/icon/icon_29.svg";
import icon_2 from "@/assets/images/dashboard/icon/icon_30.svg";
import icon_3 from "@/assets/images/dashboard/icon/icon_31.svg";
import icon_4 from "@/assets/images/dashboard/icon/icon_32.svg";
import icon_5 from "@/assets/images/dashboard/icon/icon_33.svg";
import icon_6 from "@/assets/images/dashboard/icon/icon_34.svg";
import icon_7 from "@/assets/images/dashboard/icon/icon_35.svg";
import {
  BatDongSan,
  typeListRealEstate,
  typeRequest,
} from "../../../Models/common";
import timeAgo from "../../../Constants/conversionTime";
import conversionDate from "../../../Constants/conversionDate";
import ConfirmModal from "../../../Common/modals/ConfirmModal";
import { useEffect, useState } from "react";
import axiosService from "../../../Common/api/AxiosServices";
import { GET_SIMPLE_POST } from "../../../Common/api/apiEndPoints";
import SliderImage from "../../SliderImage";

type IOpenProperty = {
  item: BatDongSan;
};

const OpenProperty = ({ item }: IOpenProperty) => {
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);

  // const [, setPost] = useState<any>({});

  // useEffect(() => {
  //   axiosService({
  //     url: GET_SIMPLE_POST.url,
  //     method: "get",
  //     params: {
  //       maBD: item,
  //     },
  //   })?.then((res: typeListRealEstate) => {
  //     if (res) {
  //       setPost(res);
  //     }
  //   });
  // }, [item]);

  return (
    <>
      <div className="col-lg-12">
        <div
          className="open-email-container pb-40 d-flex flex-column"
          style={{ minHeight: "90vh" }}
        >
          <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
            <div className="sender-info d-flex align-items-center">
              {/* <Image
              src={item?.taiKhoan.anhDaiDien}
              alt=""
              className="lazy-img logo"
            /> */}
              <Image
                src={icon_1}
                alt=""
                className=" p-img"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Link href={`/real-estate-detail?id=${item.id}`} className="ps-3">
                <div className="sender-name">{item.tenBDS}</div>
                <div className="sender-email">{item.loaiBDS.tenLoaiBDS}</div>
              </Link>
            </div>

            <div className="email-info">
              {/* <div className="time">
                <strong
                  style={{ color: "black", fontSize: "16px", fontWeight: 500 }}
                >
                  {timeAgo(item.thoiGian)}
                </strong>
                <p>{conversionDate(item.thoiGian).formattedDate}</p>
              </div> */}
            </div>
          </div>

          <div className="email-body divider" style={{ flex: 1 }}>
            <SliderImage
              listImages={item.hinhAnhList}
              width={200}
              height={160}
            />
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>
                      <strong>Tên BDS</strong>
                    </td>
                    <td>{item.tenBDS}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Diện tích</strong>
                    </td>
                    <td>{item.dienTich}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Giá thuê</strong>
                    </td>
                    <td>{item.giaThue}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Địa chỉ</strong>
                    </td>
                    <td>{item.diaChi}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Phòng ngủ</strong>
                    </td>
                    <td>{item.phongNgu}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Phòng tắm</strong>
                    </td>
                    <td>{item.phongTam}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Phòng bếp</strong>
                    </td>
                    <td>{item.phongBep}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Số tầng</strong>
                    </td>
                    <td>{item.soTang}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Năm xây dựng</strong>
                    </td>
                    <td>{item.namXayDung}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Mô tả</strong>
                    </td>
                    <td>{item.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default OpenProperty;
