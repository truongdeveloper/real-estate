"use client";
import { useEffect, useState } from "react";
import LoginModal from "../../Common/modals/LoginModal";
import CommonBanner from "../detail-common/CommonBanner";
import CommonPropertyFeatureList from "../detail-common/CommonPropertyFeatureList";
import CommonAmenities from "../detail-common/CommonAmenities";
import CommonSimilarProperty from "../detail-common/CommonSimilarProperty";

import Sidebar from "../detail-common/Sidebar";
import MediaGallery from "./MediaGallery";
import { useRecoilState } from "recoil";
import { loginModalState } from "../../Recoil/atoms/modal";
import axiosService from "../../Common/api/AxiosServices";
import { GET_SIMPLE_POST } from "../../Common/api/apiEndPoints";
import { useRouter } from "next/router";
import { PostBDS } from "../dashboard/add-new-post/AddPropertyBody";
import { typeListRealEstate } from "../../Models/common";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

const DetailRealEstate = () => {
  const router = useRouter();
  const [dataPost, setDataPost] = useState<typeListRealEstate>();
  const selectHandler = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    const { id } = router.query;

    axiosService({
      url: GET_SIMPLE_POST.url,
      method: "get",
      params: {
        maBD: id,
      },
    })
      ?.then((res) => {
        setDataPost(res);
      })
      .catch((error) => {
        toast("Không lấy được dữ liẹu bài đăng");
      });
  }, [router.query]);

  return (
    <>
      {!isEmpty(dataPost) && (
        <div className="listing-details-one theme-details-one pt-200 xl-pt-150 pb-80 xl-mb-80">
          <div className="container ">
            <CommonBanner data={dataPost} />
            <MediaGallery style={true} data={dataPost} />
            <div className="row pt-80 lg-pt-50">
              <div className="col-xl-8">
                <div className="property-overview bottom-line-dark pb-40 mb-60">
                  <h4 className="mb-20">Tổng quan</h4>
                  <p className="fs-20 lh-lg">{dataPost?.noiDung}</p>
                </div>
                <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
                  <h4 className="mb-20">Các đặc điểm BĐS</h4>
                  <p className="fs-20 lh-lg">{dataPost?.batDongSan.tenBDS}</p>

                  <div className="accordion-style-two grey-bg mt-45">
                    <CommonPropertyFeatureList item={dataPost?.batDongSan} />
                    <p className="fs-20 lh-lg text-black">
                      {dataPost.batDongSan.moTa}
                    </p>
                  </div>
                </div>
                <div className="property-amenities bottom-line-dark pb-40 mb-60">
                  <CommonAmenities item={dataPost.batDongSan.tienNghi} />
                </div>

                <div className="property-location bottom-line-dark pb-60 mb-60">
                  <h4 className="mb-40">Địa chỉ</h4>
                  <div className="wrapper">
                    <div className="map-banner overflow-hidden">
                      <div className="gmap_canvas h-100 w-100">
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.78331270715!2d${dataPost.batDongSan.kinhDo}!3d${dataPost.batDongSan.viDo}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac875a60a82f%3A0x51da945c5add838d!2zMTgzIMSQLiBUcsaw4budbmcgQ2hpbmgsIEtoxrDGoW5nIFRoxrDhu6NuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710228432910!5m2!1svi!2s`}
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
              <Sidebar item={dataPost} />
            </div>
          </div>
        </div>
      )}

      <LoginModal />
    </>
  );
};

export default DetailRealEstate;
