"use client";
import { useEffect, useState } from "react";
import LoginModal from "../../Common/modals/LoginModal";
import CommonBanner from "../detail-common/CommonBanner";
import CommonPropertyFeatureList from "../detail-common/CommonPropertyFeatureList";
import CommonAmenities from "../detail-common/CommonAmenities";
import CommonSimilarProperty from "../detail-common/CommonSimilarProperty";

import Sidebar from "../detail-common/Sidebar";
import MediaGallery from "./MediaGallery";
import axiosService from "../../Common/api/AxiosServices";
import { GET_SIMPLE_POST } from "../../Common/api/apiEndPoints";
import { useRouter } from "next/router";
import { PostBDS } from "../dashboard/add-new-post/AddPropertyBody";
import { typeListRealEstate } from "../../Models/common";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";
import GoogleMapComponent from "../../Helper/GoogleMapComponent";
import conversionDate from "../../Constants/conversionDate";
import ListData from "../../data/list-real-estates/ListData";

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
        if (res) {
          // setDataPost(res);
        }
        const data = ListData.danhSach.find((item: any) => item.id == id);
        debugger;
        setDataPost(data);
      })
      .catch((error) => {
        toast("Không lấy được dữ liẹu bài đăng");
      });
  }, [router.query]);

  const ggMap = () => {
    if (isEmpty(dataPost)) {
      return null;
    } else {
      return (
        <GoogleMapComponent
          positionProp={{
            lat: dataPost?.batDongSan.viDo,
            lng: dataPost?.batDongSan.kinhDo,
          }}
        />
      );
    }
  };

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
                  <p
                    className="fs-20 lh-lg"
                    dangerouslySetInnerHTML={{
                      __html: dataPost.noiDung.replace(/\n/g, "<br>"),
                    }}
                  ></p>
                </div>
                <div className="property-feature-accordion bottom-line-dark pb-40 mb-60">
                  <h4 className="mb-20">Các đặc điểm BĐS</h4>
                  <p className="fs-20 lh-lg fw-500 text-black">
                    {dataPost?.batDongSan.tenBDS}
                  </p>

                  <div className="accordion-style-two grey-bg mt-45">
                    <CommonPropertyFeatureList item={dataPost?.batDongSan} />
                    <p
                      className="fs-20 lh-lg text-black"
                      dangerouslySetInnerHTML={{
                        __html: dataPost.batDongSan.moTa.replace(/\n/g, "<br>"),
                      }}
                    ></p>
                  </div>
                </div>
                <div className="property-amenities bottom-line-dark pb-40 mb-60">
                  <CommonAmenities item={dataPost.batDongSan.tienNghi} />
                </div>
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-around",
                    border: "1px solid grey",
                    borderRadius: "15px",
                    padding: "10px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <div className="d-flex flex-column fs-5 mt-3">
                    <strong>Ngày đăng bài</strong>
                    {conversionDate(dataPost.ngayDangBai).formattedDate}
                  </div>
                  <div className="d-flex flex-column fs-5 mt-3">
                    <strong>Ngày hết hạn</strong>
                    {conversionDate(dataPost.ngayHetHan).formattedDate}
                  </div>
                </div>

                <div className="property-location bottom-line-dark pb-60 mb-60">
                  <h4 className="mb-40">Địa chỉ</h4>
                  <div className="wrapper">
                    <div className="map-banner overflow-hidden">
                      <div className="gmap_canvas h-100 w-100">{ggMap()}</div>
                    </div>
                  </div>
                </div>
                <CommonSimilarProperty />

                <p>
                  Mọi thông tin, nội dung liên quan tới tin rao này là do người
                  đăng tin đăng tải và chịu trách nhiệm. Chúng tôi luôn cố gắng
                  để các thông tin được hữu ích nhất cho quý vị tuy nhiên Chúng
                  tôi không đảm bảo và không chịu trách nhiệm về bất kỳ thông
                  tin, nội dung nào liên quan tới tin rao này. Trường hợp phát
                  hiện nội dung tin đăng không chính xác, Quý vị hãy thông báo
                  và cung cấp thông tin cho Ban quản trị HOMY theo
                  vanminhtruong678@gmail.com để được hỗ trợ nhanh và kịp thời
                  nhất.
                </p>

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
