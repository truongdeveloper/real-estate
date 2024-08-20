import LayoutDefault from "../../Common/Layout";
import AboutUsBody from "../../Components/about-us";
import { NextPageWithLayout } from "../../Models/common";

const Compare: NextPageWithLayout = () => {
  return (
    <div>
      <AboutUsBody />
    </div>
  );
};

Compare.Layout = LayoutDefault;

export default Compare;
