import Link from "next/link";
import conversionRealEstateStatus from "../../Constants/conversionRealEstateStatus";
import conversionNumberToPrice from "../../Constants/conversionNumberToPrice";
import { toast } from "react-toastify";

const CommonBanner = ({ data }: any) => {
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
            <i className="bi bi-geo-alt"></i> Vinhome, Văn Giang, Hưng Yên
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-40">
          <div className="price color-dark fw-500">
            {conversionNumberToPrice(data.batDongSan.giaThue)}
          </div>
          <ul className="style-none d-flex align-items-center action-btns">
            <li>
              <button
                onClick={() => {
                  toast("Like thành công");
                }}
                className={`d-flex align-items-center justify-content-center tran3s fs-3`}
              >
                <i className="fa-light fa-heart"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
