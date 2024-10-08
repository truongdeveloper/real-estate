import { NextPageWithLayout } from "../../Models/common";
import LayoutDefault from "../../Common/Layout";
import HomePage from "../../Components/HomePage";
import ListingRealEstate from "../../Components/real-estate-listing";
import { useState } from "react";

const RealEstateListing: NextPageWithLayout = () => {
  return (
    <div>
      <ListingRealEstate />
    </div>
  );
};

RealEstateListing.Layout = LayoutDefault;

export default RealEstateListing;
