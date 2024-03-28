import LayoutDefault from "../../Common/Layout";
import PricingBody from "../../Components/pricing";
import UserDetails from "../../Components/user-profile";
import { NextPageWithLayout } from "../../Models/common";

const UserPage: NextPageWithLayout = () => {
  return (
    <div>
      <UserDetails />
    </div>
  );
};

UserPage.Layout = LayoutDefault;

export default UserPage;
