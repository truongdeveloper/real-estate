import LayoutDashboard from "../../../Common/LayoutDashboard";
import PropertyListBody from "../../../Components/dashboard/properties-list";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const PropertyList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <PropertyListBody />
    </SecureRouter>
  );
};

PropertyList.Layout = LayoutDashboard;

export default PropertyList;
