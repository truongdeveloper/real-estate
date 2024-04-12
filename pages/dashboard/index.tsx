import { NextPageWithLayout } from "../../Models/common";
import LayoutDashboard from "../../Common/LayoutDashboard";
import DashboardBody from "../../Components/dashboard/index/DashboardBody";
import SecureRouter from "../../Helper/SecureRouter";

const Dashboard: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <DashboardBody />
    </SecureRouter>
  );
};

Dashboard.Layout = LayoutDashboard;

export default Dashboard;
