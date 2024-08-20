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
import SecureRouter from "../../Helper/SecureRouter";
import { useSession } from "next-auth/react";

const Sidebar = ({ item }: { item: typeListRealEstate }) => {
  const [modal, setModal] = useState(false);
  const [ownerData, setOwnerData] = useState<User>();
  const { data } = useSession();

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
            style={{ objectFit: "cover" }}
          />
          <div className="text-center mt-25">
            <Link href={`/user-profile?id=${item.maTaiKhoan}`}>
              <h6 className="name link-hover" style={{ cursor: "pointer" }}>
                {ownerData?.hoTen ? ownerData?.hoTen : "Thông tin chủ sở hữu"}
              </h6>
            </Link>
            <p className="fs-16"></p>
          </div>
          <div className="divider-line mt-40 mb-45 pt-20">
            <ul className="style-none">
              {ownerData?.diaChi && <li>Địa chỉ: {ownerData?.diaChi}</li>}
              <li>
                Email:{" "}
                <span>
                  <Link href={`mailto:${ownerData?.email}`}>
                    {ownerData?.email}
                  </Link>
                </span>
              </li>
              {ownerData?.sdt && (
                <li>
                  SĐT:{" "}
                  <span>
                    <Link href={`tel:${ownerData?.sdt}`}>{ownerData?.sdt}</Link>
                  </span>
                </li>
              )}
            </ul>
          </div>
          <button
            className="btn-nine text-uppercase rounded-3 w-100 mb-10"
            onClick={() => {
              toggle();
            }}
            style={ownerData?.id == data?.user.id ? { display: "none" } : {}}
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
        <SecureRouter>
          <ModalHeader toggle={toggle}>Yêu cầu thuê</ModalHeader>
          <ModalBody>
            <ScheduleForm idPost={item.id} />
          </ModalBody>
        </SecureRouter>
      </Modal>
    </div>
  );
};

export default Sidebar;
