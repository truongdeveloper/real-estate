import Image from "next/image";
import Link from "next/link";

import titleShape from "@/assets/images/shape/title_shape_03.svg";
import property_data from "../../data/home-data/PropertyData";
import { listingData } from "../../data/inner-data/ListingData";

const Property = () => {
  return (
    <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
      <div className="container">
        <div className="position-relative">
          <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3>
              Danh sách{" "}
              <span>
                mới <Image src={titleShape} alt="" className="lazy-img" />
              </span>
            </h3>
            <p className="fs-22 mt-xs">
              Khám phá các BĐS mới nhất và nổi bật để thuê.
            </p>
          </div>

          <div className="row gx-xxl-5">
            {listingData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40">
                <div className="listing-card-one style-two h-100 w-100 ">
                  <div className="img-gallery">
                    <div className="position-relative overflow-hidden">
                      {/* <div className="tag fw-500">{item.tag}</div> */}
                      {/* <div id={`carousel${item.id}`} className="carousel slide">
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target={`#carousel${item.carousel}`}
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carousel${item.carousel}`}
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target={`#carousel${item.carousel}`}
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          {item.batDongSan.hinhAnhList.map((item, i) => (
                            <div
                              key={i}
                              className={`carousel-item ${item.id}`}
                              data-bs-interval="1000000"
                            >
                              <Link
                                href="/listing_details_01"
                                className="d-block"
                              >
                                <Image
                                  src={"/assets/images/listing/img_01.jpg"}
                                  className="w-100"
                                  width={100}
                                  height={100}
                                  // fill={true}
                                  alt="..."
                                />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div> */}
                      <Image
                        src={item.batDongSan.hinhAnhList[0].url}
                        className="w-100"
                        width={400}
                        height={400}
                        // fill={true}
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <Link
                      href={`/real-estate-detail?id=${item.id}`}
                      className="title tran3s"
                    >
                      {item.tieuDe}
                    </Link>
                    <div className="address">
                      {" "}
                      {item.batDongSan.diaChi},{" "}
                      {item.batDongSan.viTri.quanHuyen},{" "}
                      {item.batDongSan.viTri.tinhTp}
                    </div>
                    {/* <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
                        {item.property_info.map((info, index) => (
                          <li key={index} className="d-flex align-items-center">
                            <Image
                              src={info.icon}
                              alt=""
                              className="lazy-img icon me-2"
                            />
                            <span className="fs-16">
                              {info.total_feature} {info.feature}
                            </span>
                          </li>
                        ))}
                      </ul> */}
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        đ
                        {item.batDongSan.giaThue.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                        /th
                      </strong>
                      <Link
                        href={`/real-estate-detail?id=${item.id}`}
                        className="btn-four"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
