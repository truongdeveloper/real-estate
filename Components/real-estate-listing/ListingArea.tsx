"use client";
// import DropdownThree from "@/components/search-dropdown/inner-dropdown/DropdownThree";

import Image from "next/image";
import ReactPaginate from "react-paginate";

import icon from "@/assets/images/icon/icon_46.svg";
import SelectCustom from "../../Helper/ui/SelectCustom";
import DropdownHome from "../search-dropdown/home-dropdown/Dropdown";

import { typeListRealEstate } from "../../Models/common";
import LongCard from "../../Helper/LongCard";
import { uniqueId } from "lodash";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { LegacyRef, useEffect, useRef, useState } from "react";
import ShortCard from "../../Helper/ShortCard";
import GoogleMap from "../../Helper/GoogleMapComponent";
import GoogleMapComponent from "../../Helper/GoogleMapComponent";
import UseSticky from "../../libs/hooks/UseSticky";

const ListingArea = (props: any) => {
  const {
    ListingData,
    totalPage,
    handleSearchChange,
    handlePriceChange,
    maxPrice,
    priceValue,
    handleResetFilter,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
  } = props;

  // const handleResetFilter = () => {
  //   resetFilters();
  // };

  const router = useRouter();
  const selectHandler = (e: any) => {};
  const [page, setPage] = useState(0);
  const [isGrid, setIsGrid] = useState(true);

  const [useMap, setUseMap] = useState(true);

  useEffect(() => {
    const { page } = router.query;
    if (page) {
      const pageNumber = parseInt(page as string, 10);
      if (!isNaN(pageNumber) && pageNumber >= 1) {
        setPage(pageNumber);
      }
    }
  }, [router.query]);

  function handlePageClick(page: any) {
    toast(`page Change ${page.selected}`);
    const { pathname } = router;
    const nextPage = `${pathname}?page=${page.selected + 1}`;
    router.push(nextPage);
  }

  function handleSwitchListView() {
    setIsGrid(!isGrid);
  }

  function handleSwitchUseMap() {
    setUseMap(!useMap);
  }
  if (!useMap) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  const wrapperRef = useRef(null) as any;
  const [height, setheight] = useState(null);
  useEffect(() => {
    setheight(wrapperRef?.current?.offsetHeight);
  }, [useMap]);

  return (
    <div
      className={`property-listing-six pb-200 xl-pb-120 ${"pt-200 xl-pt-150"}`}
    >
      <div className="container container-large">
        <div
          className={`theme-main-menu menu-overlay  menu-style-one sticky-menu ${
            !useMap ? "fixed" : "position-relative"
          }`}
        >
          <div
            className={`search-wrapper-one layout-one ${!useMap ? "" : "bg"}`}
            ref={wrapperRef}
          >
            <div className="bg-wrapper rounded-0 border-0">
              <DropdownHome isListing />
            </div>
          </div>

          <div
            className="d-flex"
            style={!useMap ? { height: `calc(100vh - ${height}px` } : {}}
          >
            <div
              className={`container`}
              style={!useMap ? { overflow: "scroll", maxWidth: "45%" } : {}}
            >
              <div
                className={`listing-header-filter d-sm-flex justify-content-between align-items-center lg-mb-30 ${"mb-40"}`}
              >
                <div>
                  Hiện <span className="color-dark fw-500"></span> của{" "}
                  <span className="color-dark fw-500"></span> Kết quả
                </div>
                <div className="d-flex align-items-center xs-mt-20">
                  {/* <div className="short-filter d-flex align-items-center">
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
                  </div> */}
                  <button
                    // href={`/${style ? "listing_10" : "listing_08"}`}
                    className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                    data-bs-toggle="tooltip"
                    onClick={handleSwitchListView}
                    title="Switch To List View"
                  >
                    <i className="fa-regular fa-bars"></i>
                  </button>
                  <button
                    // href={`/${style ? "listing_10" : "listing_08"}`}
                    className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                    data-bs-toggle="tooltip"
                    onClick={handleSwitchUseMap}
                    title="Switch To List View"
                  >
                    <i className="fa-regular fa-map"></i>
                  </button>
                </div>
              </div>

              <div className="row m-0 justify-content-center">
                {ListingData &&
                  ListingData.map((item: typeListRealEstate) => {
                    return isGrid || !useMap ? (
                      <ShortCard
                        key={uniqueId()}
                        itemPost={item}
                        mediumCol={!useMap}
                      />
                    ) : (
                      <LongCard key={uniqueId()} itemPost={item} />
                    );
                  })}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel={<Image src={icon} alt="" className="ms-2" />}
                onPageChange={handlePageClick}
                pageCount={totalPage}
                forcePage={page - 1}
                previousLabel={<Image src={icon} alt="" className="ms-2" />}
                renderOnZeroPageCount={null}
                className="pagination-one m-0 square d-flex align-items-center justify-content-center style-none pt-30"
              />
            </div>
            {!useMap ? (
              <div
                style={{
                  flexGrow: 1,
                  borderRadius: "10px",
                }}
              >
                <GoogleMapComponent drawable={true} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingArea;
