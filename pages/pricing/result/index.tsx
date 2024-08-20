import LayoutDefault from "../../../Common/Layout";
import PricingResultBody from "../../../Components/pricing/result";
import { NextPageWithLayout } from "../../../Models/common";

const index: NextPageWithLayout = () => {
  return (
    <div>
      <PricingResultBody />
    </div>
  );
};

index.Layout = LayoutDefault;

export default index;
