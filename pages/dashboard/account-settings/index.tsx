import LayoutDashboard from "../../../Common/LayoutDashboard";
import DashboardAccountSetting from "../../../Components/dashboard/account-settings";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const index: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <DashboardAccountSetting />
    </SecureRouter>
  );
};

index.Layout = LayoutDashboard;

export default index;
