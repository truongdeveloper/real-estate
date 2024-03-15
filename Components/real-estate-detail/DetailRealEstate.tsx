"use client";
import { useState } from "react";
import LoginModal from "../../Common/modals/LoginModal";
import CommonBanner from "../detail-common/CommonBanner";
import CommonPropertyFeatureList from "../detail-common/CommonPropertyFeatureList";
import CommonAmenities from "../detail-common/CommonAmenities";
import CommonSimilarProperty from "../detail-common/CommonSimilarProperty";

import Sidebar from "../detail-common/Sidebar";
import MediaGallery from "./MediaGallery";

const DetailRealEstate = () => {
  const selectHandler = (e: any) => {};

  const [loginModal, setLoginModal] = useState<boolean>(false);

  return (
    <>
      <div className="listing-details-one theme-details-one pt-200 xl-pt-150 pb-80 xl-mb-80">
        <div className="container ">
          <CommonBanner style_3={true} />
          <MediaGallery />
          <div className="row pt-80 lg-pt-50">
            <div className="col-xl-8">
              <div className="property-overview bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Tổng quan</h4>
                <p className="fs-20 lh-lg">
                  Căn hộ Homyland 3 mặt ngay mặt tiền Nguyễn Duy Trinh, Quận 2.
                  Thuận tiện di chuyển đến các khu vực xung như Quận 1, Thủ
                  Thiêm, Thảo Điền hay An Phú An Khánh chỉ 15 - 25 phút lái xe.
                  - Trong bán kính 3 - 5 km, tiện ích sống cơ bản rất đầy đủ và
                  đa dạng. - Tiện ích nội khu đầy đủ, Homyland là số ít dự án mà
                  shophouse hoạt động gần như full. - Homyland nằm sát khu Rạch
                  Chiếc, là quỹ đất vàng được quy hoạch mới, đồng bộ và đẳng cấp
                  của Trung tâm quận 2 với các dự án đẳng cấp: The Global City
                  (114ha) của Masterise Homes đang dần hình thành, Saigon Sport
                  City (64ha) của Keppel Land, Senturia An Phú của Tiến Phước,
                  Gem Riverside của Đất Xanh và Khu TDTT Rạch Chiếc (như Mỹ
                  Đình, Hà Nội). Khi các dự án này đồng bộ hoàn thiện, sẽ cung
                  cấp 1 loạt tiện ích cao cấp và tạo ra cộng đồng cư dân văn
                  minh, đẳng cấp.{" "}
                </p>
              </div>
              <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
                <h4 className="mb-20">Các đặc điểm BĐS</h4>
                <p className="fs-20 lh-lg"></p>

                <div className="accordion-style-two grey-bg mt-45">
                  {/* <CommonPropertyFeatureList />
                   */}
                  Căn hộ diện tích 75m² (2PN - 2WC). Giá bán: 2 tỷ 800 triệu - 2
                  tỷ 950 triệu. Căn hộ diện tích 81m² (2PN - 2WC). Giá bán: 2 tỷ
                  900 triệu - 3 tỷ. Căn hộ diện tích 85m² (2PN - 2WC). Giá bán:
                  2 tỷ 860 triệu - 3 tỷ 100 triệu. Căn hộ diện tích 95m² (3PN -
                  2WC). Giá bán: 3 tỷ 800 triệu - 4 tỷ. Căn hộ diện tích 107m²
                  (3PN - 2WC). Giá bán: 4 tỷ 100 triệu - 4 tỷ 300 triệu. Các
                  phương thức thanh toán: - PA1: Thanh toán thành 4 đợt trong
                  vòng 12 tháng. - PA2: Thanh toán sớm 95%, chiết khấu 3%. -
                  PA3: Ngân hàng hỗ trợ 65%, thanh toán 30% nhận nhà ở liền,
                  chiết khấu 5%. - Nhận nhà ở ngay, pháp lý chuẩn chỉnh. - Tặng
                  01 năm phí quản lý. * Phí dịch vụ: - Phí quản lý: 6k/m². - Xe
                  máy: 70k/tháng. - Xe ô tô: 700k/tháng.
                </div>
              </div>
              <div className="property-amenities bottom-line-dark pb-40 mb-60">
                <CommonAmenities />
              </div>

              <div className="property-location bottom-line-dark pb-60 mb-60">
                <h4 className="mb-40">Địa chỉ</h4>
                <div className="wrapper">
                  <div className="map-banner overflow-hidden">
                    <div className="gmap_canvas h-100 w-100">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.78331270715!2d105.82622548357436!3d21.001321390382376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac875a60a82f%3A0x51da945c5add838d!2zMTgzIMSQLiBUcsaw4budbmcgQ2hpbmgsIEtoxrDGoW5nIFRoxrDhu6NuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710228432910!5m2!1svi!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-100 h-100"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <CommonSimilarProperty />

              {/* <div className="review-panel-one bottom-line-dark pb-40 mb-60">
                <div className="position-relative z-1">
                  <div className="d-sm-flex justify-content-between align-items-center mb-10">
                    <h4 className="m0 xs-pb-30">Reviews</h4>
                    <SelectCustom
                      className="nice-select rounded-0"
                      options={[
                        { value: "01", text: "Newest" },
                        { value: "02", text: "Best Seller" },
                        { value: "03", text: "Best Match" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      name=""
                      placeholder=""
                    />
                  </div>
                  <Review />
                </div>
              </div> */}

              {/* <div className="review-form">
                <h4 className="mb-20">Leave A Reply</h4>
                <p className="fs-20 lh-lg pb-15">
                  <a
                    onClick={() => setLoginModal(true)}
                    style={{ cursor: "pointer" }}
                    className="color-dark fw-500 text-decoration-underline"
                  >
                    Sign in
                  </a>
                  to post your comment or signup if you don&apos;t have any
                  account.
                </p>

                <div className="bg-dot p-30"><AgencyFormOne /></div>
              </div> */}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>

      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
    </>
  );
};

export default DetailRealEstate;
