import LayoutDashboard from "../../../../Common/LayoutDashboard";
import PasswordChange from "../../../../Components/dashboard/account-settings/password-change";
import SecureRouter from "../../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../../Models/common";

const index: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <PasswordChange />
    </SecureRouter>
  );
};

index.Layout = LayoutDashboard;

export default index;
