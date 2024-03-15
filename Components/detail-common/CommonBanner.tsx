import Link from "next/link";

const CommonBanner = ({ style_3 }: any) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h3 className="property-titlee">Chung cư Vinhome Ocenpark 2</h3>
        <div className="d-flex flex-wrap mt-10">
          <div
            className={`list-type text-uppercase mt-15 me-3 ${
              style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"
            }`}
          >
            Cho thuê
          </div>
          <div className="address mt-15">
            <i className="bi bi-geo-alt"></i> Vinhome, Văn Giang, Hưng Yên
          </div>
        </div>
      </div>
      <div className="col-lg-6 text-lg-end">
        <div className="d-inline-block md-mt-40">
          <div className="price color-dark fw-500">12,000,000đ/ tháng</div>
          <ul className="style-none d-flex align-items-center action-btns">
            <li className="me-auto fw-500 color-dark">
              <i className="fa-sharp fa-regular fa-share-nodes me-2"></i>
              Share
            </li>
            <li>
              <Link
                href="#"
                className={`d-flex align-items-center justify-content-center tran3s ${
                  style_3 ? "" : "rounded-circle"
                }`}
              >
                <i className="fa-light fa-heart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
