"use client";
// import DropdownThree from "@/components/search-dropdown/inner-dropdown/DropdownThree";

import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import featureIcon_1 from "@/assets/images/icon/icon_32.svg";
import featureIcon_2 from "@/assets/images/icon/icon_33.svg";
import featureIcon_3 from "@/assets/images/icon/icon_34.svg";
import icon from "@/assets/images/icon/icon_46.svg";
import SelectCustom from "../../Helper/ui/SelectCustom";
import DropdownHome from "../search-dropdown/home-dropdown/Dropdown";
import listing_data from "../../data/inner-data/ListingData";
import Fancybox from "../../Common/Fancybox";

const ListingArea = ({ style }: any) => {
  const itemsPerPage = 9;
  const page = "listing_5";

  // const {
  //   itemOffset,
  //   sortedProperties,
  //   currentItems,
  //   pageCount,
  //   handlePageClick,
  //   handleBathroomChange,
  //   handleBedroomChange,
  //   handleSearchChange,
  //   handlePriceChange,
  //   maxPrice,
  //   priceValue,
  //   resetFilters,
  //   selectedAmenities,
  //   handleAmenityChange,
  //   handleLocationChange,
  //   handleStatusChange,
  //   handleTypeChange,
  //   handlePriceDropChange,
  // } = UseShortedProperty({ itemsPerPage, page });

  // const handleResetFilter = () => {
  //   resetFilters();
  // };

  return (
    <div
      className={`property-listing-six pb-200 xl-pb-120 ${
        style ? "pt-120 xl-pt-100" : "pt-200 xl-pt-150"
      }`}
    >
      <div className="container container-large">
        {!style && (
          <div className="search-wrapper-one layout-one bg position-relative mb-75 md-mb-50">
            <div className="bg-wrapper rounded-0 border-0">
              {/* <DropdownHome
                handlePriceDropChange={handlePriceDropChange}
                handleSearchChange={handleSearchChange}
                handleBedroomChange={handleBedroomChange}
                handleBathroomChange={handleBathroomChange}
                handlePriceChange={handlePriceChange}
                maxPrice={maxPrice}
                priceValue={priceValue}
                handleResetFilter={handleResetFilter}
                selectedAmenities={selectedAmenities}
                handleAmenityChange={handleAmenityChange}
                handleLocationChange={handleLocationChange}
                handleStatusChange={handleStatusChange}
              /> */}
            </div>
          </div>
        )}

        <div
          className={`listing-header-filter d-sm-flex justify-content-between align-items-center lg-mb-30 ${
            style ? "mb-50" : "mb-40"
          }`}
        >
          {/* <div>
            Showing{" "}
            <span className="color-dark fw-500">
              {itemOffset + 1}–{itemOffset + currentItems.length}
            </span>{" "}
            of{" "}
            <span className="color-dark fw-500">{sortedProperties.length}</span>{" "}
            results
          </div> */}
          <div className="d-flex align-items-center xs-mt-20">
            <div className="short-filter d-flex align-items-center">
              <div className="fs-16 me-2">Short by:</div>
              <SelectCustom
                className={`nice-select rounded-0 `}
                options={[
                  { value: "newest", text: "Newest" },
                  { value: "best_seller", text: "Best Seller" },
                  { value: "best_match", text: "Best Match" },
                  { value: "price_low", text: "Price Low" },
                  { value: "price_high", text: "Price High" },
                ]}
                defaultCurrent={0}
                onChange={() => {}}
                name=""
                placeholder=""
              />
            </div>
            <Link
              href={`/${style ? "listing_10" : "listing_08"}`}
              className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
              data-bs-toggle="tooltip"
              title="Switch To List View"
            >
              <i className="fa-regular fa-bars"></i>
            </Link>
          </div>
        </div>

        <div className="row gx-xxl-5">
          {listing_data.map((item: any) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 d-flex mb-80 lg-mb-40 wow fadeInUp"
              data-wow-delay={item.data_delay_time}
            >
              <div className="listing-card-one style-two shadow-none h-100 w-100">
                <div className="img-gallery">
                  <div className="position-relative overflow-hidden">
                    <div className={`tag fw-500 ${item.tag_bg}`}>
                      {item.tag}
                    </div>
                    <Link href="#" className="fav-btn tran3s">
                      <i className="fa-light fa-heart"></i>
                    </Link>
                    <div
                      id={`carousel${item.carousel}`}
                      className="carousel slide"
                    >
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
                        {item.carousel_thumb.map((item: any, i: any) => (
                          <div
                            key={i}
                            className={`carousel-item ${item.active}`}
                            data-bs-interval="1000000"
                          >
                            <Link
                              href="/listing_details_01"
                              className="d-block"
                            >
                              <Image
                                src={item.img}
                                className="w-100"
                                alt="..."
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-info pt-20">
                  <Link href="/real-estate-detail" className="title tran3s">
                    {item.title}
                  </Link>
                  <div className="address">{item.address}</div>
                  <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                    <li className="d-flex align-items-center">
                      <Image
                        src={featureIcon_1}
                        alt=""
                        className="lazy-img icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">
                          {item.property_info.sqft}
                        </span>{" "}
                        sqft
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <Image
                        src={featureIcon_2}
                        alt=""
                        className="lazy-img icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">
                          {item.property_info.bed}
                        </span>{" "}
                        bed
                      </span>
                    </li>
                    <li className="d-flex align-items-center">
                      <Image
                        src={featureIcon_3}
                        alt=""
                        className="lazy-img icon me-2"
                      />
                      <span className="fs-16">
                        <span className="color-dark">
                          {item.property_info.bath}
                        </span>{" "}
                        bath
                      </span>
                    </li>
                  </ul>
                  <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark">
                      $
                      {item.price.toLocaleString({
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {item.price_text && (
                        <>
                          /<sub>m</sub>
                        </>
                      )}
                    </strong>
                    <Link href="/real-estate-detail" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {listing_data.map((item: any) => (
            <div
              key={item.id}
              className="listing-card-seven grey-bg mb-50 wow fadeInUp"
            >
              <div className="d-flex flex-wrap layout-two">
                <div
                  className={`img-gallery position-relative z-1 overflow-hidden ${item.bg_img}`}
                >
                  <div className="tag bg-white rounded-0 text-dark fw-500">
                    {item.tag}
                  </div>
                  <div className="img-slider-btn">
                    03 <i className="fa-regular fa-image"></i>
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: true,
                        },
                      }}
                    >
                      {item.carousel_thumb.map((thumb: any, index: any) => (
                        <a
                          key={index}
                          className="d-block"
                          data-fancybox="gallery4"
                          href={`/assets/images/listing/img_large_0${thumb.id}.jpg`}
                        ></a>
                      ))}
                    </Fancybox>
                  </div>
                </div>
                <div className="property-info">
                  <Link
                    href="/listing_details_01"
                    className="title tran3s mb-15"
                  >
                    {item.title}
                  </Link>
                  <div className="address">{item.address}</div>
                  <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                      <li>
                        <strong>{item.property_info.sqft}</strong> sqft
                      </li>
                      <li>
                        <strong>{item.property_info.bed}</strong> bed
                      </li>
                      <li>
                        <strong>{item.property_info.bath}</strong> bath
                      </li>
                      <li>
                        <strong>{item.property_info.kitchen}</strong> Kitchen
                      </li>
                      <li>
                        <strong>{item.property_info.parking_lot}</strong>{" "}
                        Parking Lot
                      </li>
                      <li>
                        <strong>{item.property_info.garden}</strong> Garden
                      </li>
                    </ul>
                  </div>
                  <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                    <strong className="price fw-500 color-dark me-auto">
                      $
                      {item.price.toLocaleString({
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      {item.price_text && (
                        <>
                          /<sub>m</sub>
                        </>
                      )}
                    </strong>
                    <ul className="style-none d-flex action-icons on-top">
                      <li>
                        <Link href="#">
                          <i className="fa-light fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-light fa-bookmark"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-light fa-circle-plus"></i>
                        </Link>
                      </li>
                    </ul>
                    <Link href="/listing_details_01" className="btn-four">
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <ReactPaginate
          breakLabel="..."
          nextLabel={<Image src={icon} alt="" className="ms-2" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageCount}
          pageCount={pageCount}
          previousLabel={<Image src={icon} alt="" className="ms-2" />}
          renderOnZeroPageCount={null}
          className="pagination-one square d-flex align-items-center justify-content-center style-none pt-30"
        /> */}
      </div>
    </div>
  );
};

export default ListingArea;
