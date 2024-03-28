import LayoutDashboard from "../../../Common/LayoutDashboard";
import PropertyListBody from "../../../Components/dashboard/properties-list";
import { NextPageWithLayout } from "../../../Models/common";

const PropertyList: NextPageWithLayout = () => {
  return (
    <div>
      <PropertyListBody />
    </div>
  );
};

PropertyList.Layout = LayoutDashboard;

export default PropertyList;
