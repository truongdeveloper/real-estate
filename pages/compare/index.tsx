import LayoutDefault from "../../Common/Layout";
import CompareBody from "../../Components/compare";
import { NextPageWithLayout } from "../../Models/common";

const Compare: NextPageWithLayout = () => {
  return (
    <div>
      <CompareBody />
    </div>
  );
};

Compare.Layout = LayoutDefault;

export default Compare;
