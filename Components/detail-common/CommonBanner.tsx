import Link from "next/link";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";
import conversionNumberToPrice from "../../Constants/conversionNumberToPrice";
import { toast } from "react-toastify";
import {
  getNameOfDistrict,
  getNameOfProvince,
} from "../../Constants/conversionAdress";
import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import SecureRouter from "../../Helper/SecureRouter";
import ReportModal from "./ReportModal";

const CommonBanner = ({ data }: any) => {
  const [districtName, setDistrictName] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    getNameOfDistrict(
      data.batDongSan.viTri.quanHuyen,
      data.batDongSan.viTri.tinhTp
    ).then((data) => {
      if (data) {
        setDistrictName(data);
      }
    });
  }, [data, districtName, setDistrictName]);

  console.log(data);

  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-titlee">{data.tieuDe}</h3>
        <div className="d-flex flex-wrap mt-10">
          <div
            className={`list-type text-uppercase mt-15 me-3 ${"bg-white text-dark fw-500"}`}
          >
            {conversionRealEstateStatus(data.trangThai)}
          </div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> {data.batDongSan.diaChi},{" "}
            {data.batDongSan.phuongXa}, {districtName},{" "}
            {getNameOfProvince(data.batDongSan?.viTri.tinhTp)}
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-40">
          <div className="price color-dark fw-500">
            {conversionNumberToPrice(data.batDongSan.giaThue)}/tháng
          </div>
          <ul className="style-none d-flex align-items-end action-btns justify-content-end mt-3">
            <li>
              <button
                onClick={() => {
                  toggle();
                }}
                className={`d-flex align-items-center justify-content-center tran3s fs-3`}
              >
                <div className="d-flex flex-column">
                  <i className="fa-solid fa-triangle-exclamation text-danger"></i>

                  <p className="fs-6 mb-0">Báo cáo</p>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} centered size="lg">
        <SecureRouter>
          <ModalHeader toggle={toggle}>Báo cáo bài đăng sai phạm</ModalHeader>
          <ModalBody>
            <ReportModal idPost={data.id} />
          </ModalBody>
        </SecureRouter>
      </Modal>
    </div>
  );
};

export default CommonBanner;
