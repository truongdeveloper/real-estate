import LayoutDefault from "../../Common/Layout";
import PricingBody from "../../Components/pricing";
import { NextPageWithLayout } from "../../Models/common";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <PricingBody />
    </div>
  );
};

Home.Layout = LayoutDefault;

export default Home;
