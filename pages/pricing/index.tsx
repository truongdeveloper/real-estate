import LayoutDefault from "../../Common/Layout";
import PricingBody from "../../Components/pricing";
import { NextPageWithLayout } from "../../Models/common";

const index: NextPageWithLayout = () => {
  return (
    <div>
      <PricingBody />
    </div>
  );
};

index.Layout = LayoutDefault;

export default index;
