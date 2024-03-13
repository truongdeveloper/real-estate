import { NextPageWithLayout } from "../../Models/common";
import LayoutDefault from "../../Common/Layout";
import DetailRealEstate from "../../Components/real-estate-detail/DetailRealEstate";

const RealEstateDetail: NextPageWithLayout = () => {
  return (
    <div>
      <DetailRealEstate />
    </div>
  );
};

RealEstateDetail.Layout = LayoutDefault;

export default RealEstateDetail;
