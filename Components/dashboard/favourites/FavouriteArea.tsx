"use client";
// import UseShortedProperty from "@/hooks/useShortedProperty";
import Link from "next/link";
import Image from "next/image";
import ReactPaginate from "react-paginate";

import icon from "@/assets/images/icon/icon_46.svg";
import featureIcon_1 from "@/assets/images/icon/icon_04.svg";
import featureIcon_2 from "@/assets/images/icon/icon_05.svg";
import featureIcon_3 from "@/assets/images/icon/icon_06.svg";
import ShortCard from "../../../Helper/ShortCard";
import { listingData } from "../../../data/inner-data/ListingData";
import { uniqueId } from "lodash";

const FavouriteArea = () => {
  const itemsPerPage = 9;
  const page = "listing_4";

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
    <>
      <div className="row gx-xxl-5">
        {listingData.slice(0, 9).map((item) => (
          <ShortCard key={uniqueId()} itemPost={item}></ShortCard>
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
            className="pagination-one d-flex align-items-center style-none pt-20"
         /> */}
    </>
  );
};

export default FavouriteArea;
