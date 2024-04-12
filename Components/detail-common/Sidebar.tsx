import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ScheduleForm from "./detail-sitebar/ScheduleForm";
import Image from "next/image";
import infoAvatar from "@/assets/images/agent/img_06.jpg";
import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axiosService from "../../Common/api/AxiosServices";
import { GET_USER_INFO } from "../../Common/api/apiEndPoints";
import { Account, typeListRealEstate } from "../../Models/common";
import { User } from "../dashboard/profile";

const Sidebar = ({ item }: { item: typeListRealEstate }) => {
  const [modal, setModal] = useState(false);
  const [ownerData, setOwnerData] = useState<User>();

  const toggle = () => setModal(!modal);

  useEffect(() => {
    axiosService({
      url: GET_USER_INFO.url,
      method: "get",
      params: {
        maTK: item.maTaiKhoan,
      },
    })?.then((res: User) => {
      setOwnerData(res);
    });
  }, [item]);
  return (
    <div className="col-xl-4 col-lg-8 me-auto ms-auto">
      <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
        <div className="agent-info bg-white border-20 p-30 mb-40">
          <Image
            width={150}
            height={150}
            src={ownerData?.anhDaiDien || infoAvatar}
            alt=""
            className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar"
          />
          <div className="text-center mt-25">
            <h6 className="name">{ownerData?.hoTen}</h6>
            <p className="fs-16"></p>
            {/* <ul className="style-none d-flex align-items-center justify-content-center social-icon">
              <li>
                <Link href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="divider-line mt-40 mb-45 pt-20">
            <ul className="style-none">
              <li>
                Địa chỉ: <span>{ownerData?.diaChi}</span>
              </li>
              <li>
                Email:{" "}
                <span>
                  <Link href="mailto:akabirr770@gmail.com">
                    {ownerData?.email}
                  </Link>
                </span>
              </li>
              <li>
                SĐT:{" "}
                <span>
                  <Link href="tel:+12347687565">{ownerData?.sdt}</Link>
                </span>
              </li>
            </ul>
          </div>
          <button
            className="btn-nine text-uppercase rounded-3 w-100 mb-10"
            onClick={() => {
              toggle();
            }}
          >
            Yêu cầu thuê
          </button>
        </div>
        {/* <div className="tour-schedule bg-white border-20 p-30 mb-40">
          <h5 className="mb-40">Đặt lịch khảo sát</h5>
          <ScheduleForm />
        </div> */}
      </div>
      <Modal isOpen={modal} toggle={toggle} centered size="lg">
        <ModalHeader toggle={toggle}>Yêu cầu thuê</ModalHeader>
        <ModalBody>
          <ScheduleForm idPost={item.id} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Sidebar;
