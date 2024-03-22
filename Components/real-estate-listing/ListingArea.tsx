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
import { listing_data, listingData } from "../../data/inner-data/ListingData";
import Fancybox from "../../Common/Fancybox";
import { typeListRealEstate } from "../../Models/common";
import LongCard from "../../Helper/LongCard";
import { uniqueId } from "lodash";

const ListingArea = ({ style, ListingData }: any) => {
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
          {/* <div className="d-flex align-items-center xs-mt-20">
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
            <button
              // href={`/${style ? "listing_10" : "listing_08"}`}
              className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
              data-bs-toggle="tooltip"
              title="Switch To List View"
            >
              <i className="fa-regular fa-bars"></i>
            </button>
          </div> */}
        </div>

        <div className="row gx-xxl-5 container m-auto">
          {listingData.map((item: typeListRealEstate) => (
            <LongCard key={uniqueId()} itemPost={item} />
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
