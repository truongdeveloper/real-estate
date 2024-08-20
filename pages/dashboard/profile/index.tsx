import LayoutDashboard from "../../../Common/LayoutDashboard";
import ProfileBody from "../../../Components/dashboard/profile";

import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const PropertyList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <ProfileBody />
    </SecureRouter>
  );
};

PropertyList.Layout = LayoutDashboard;

export default PropertyList;
