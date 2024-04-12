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
import { typeListRealEstate, typeRequest } from "../../../Models/common";
import timeAgo from "../../../Constants/conversionTime";
import conversionDate from "../../../Constants/conversionDate";
import ConfirmModal from "../../../Common/modals/ConfirmModal";
import { useEffect, useState } from "react";
import axiosService from "../../../Common/api/AxiosServices";
import { GET_SIMPLE_POST } from "../../../Common/api/apiEndPoints";
import LongCard from "../../../Helper/LongCard";
import { isEmpty } from "lodash";

type IOpenRequest = {
  item: typeRequest;
  handleReject?: any;
  handleAccept?: any;
};

const OpenRequest = ({ item, handleReject, handleAccept }: IOpenRequest) => {
  const [confirmAccept, setConfirmAccept] = useState(false);
  const [confirmReject, setConfirmReject] = useState(false);

  const [post, setPost] = useState<any>({});

  useEffect(() => {
    axiosService({
      url: GET_SIMPLE_POST.url,
      method: "get",
      params: {
        maBD: item.maBD,
      },
    })?.then((res: typeListRealEstate) => {
      if (res) {
        setPost(res);
      }
    });
  }, [item]);

  return (
    <>
      <div className="col-lg-12">
        <div
          className="open-email-container pb-40 d-flex flex-column"
          style={{ minHeight: "90vh" }}
        >
          <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
            <div className="sender-info d-flex align-items-center">
              <Image
                src={item?.taiKhoan?.anhDaiDien || icon_1}
                alt=""
                width={100}
                height={100}
                className="lazy-img logo"
              />
              {/* <Image
                src={icon_1}
                alt=""
                className=" p-img"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              /> */}
              <Link href={`/user-profile?id=${item.maTK}`} className="ps-3">
                <div className="sender-name">{item.taiKhoan.hoTen}</div>
                <div className="sender-email">{item.taiKhoan.tenTaiKhoan}</div>
              </Link>
            </div>

            <div className="email-info">
              <div className="time">
                <strong
                  style={{ color: "black", fontSize: "16px", fontWeight: 500 }}
                >
                  {timeAgo(item.thoiGian)}
                </strong>
                <p>{conversionDate(item.thoiGian).formattedDate}</p>
              </div>
              {/* <div className="d-flex align-items-center justify-content-end">
              <button className="delete-email">
                <Image src={icon_1} alt="" className="lazy-img" />
              </button>
              <button className="reply-email ms-3 me-3">
                <Image src={icon_2} alt="" className="lazy-img" />
              </button>
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
                      Reply
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Fowrward
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Block
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            </div>
          </div>

          <div className="email-body divider" style={{ flex: 1 }}>
            <div className="ps-4 pt-3 pe-4 ps-xxl-5 pe-xxl-5">
              <h3>{item.tieuDe}</h3>
              <p>{item.noiDung}</p>
            </div>
          </div>
          <div>
            <Link
              href={`/real-estate-detail?id=${item.maBD}`}
              className="p-3 title
            "
            >
              <button className="btn-five">Bất động sản</button>
            </Link>
          </div>

          <div className="email-footer">
            <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5 d-flex justify-content-between align-items-center">
              <button
                className="d-flex align-items-center gap-3 btn-two"
                onClick={() => setConfirmAccept(true)}
              >
                <i className="fa-solid fa-check"></i>
                Đồng ý
              </button>
              <button
                className="d-flex align-items-center gap-3 btn-one"
                onClick={() => setConfirmReject(true)}
              >
                <i className="fa-solid fa-xmark"></i>
                Từ chối
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={confirmAccept}
        setIsOpen={setConfirmAccept}
        handleAcceptEvent={handleAccept}
        title="Đồng ý cho thuê"
        center
        content={`Bạn đồng ý cho ${item.taiKhoan.hoTen} thuê BĐS
        Bất động sản của bạn sẽ chuyển sang trạng thái đã cho thuê`}
        icon={<i className="fa-solid fa-check-to-slot text-success"></i>}
      />

      <ConfirmModal
        isOpen={confirmReject}
        setIsOpen={setConfirmReject}
        handleAcceptEvent={handleReject}
        center
        title="Từ chối cho thuê"
        content={`Bạn không đồng ý cho ${item.taiKhoan.hoTen} thuê BĐS
        Yêu cầu thuê nàyu sẽ chuyển sang trạng thái bị từ chôi`}
        icon={<i className="fa-solid fa-ban text-warning"></i>}
      />
    </>
  );
};

export default OpenRequest;
