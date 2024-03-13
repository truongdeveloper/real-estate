import { NextPageWithLayout } from "../../Models/common";
import LayoutDashboard from "../../Common/LayoutDashboard";
import DashboardBody from "../../Components/dashboard/index/DashboardBody";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div>
      <DashboardBody />
    </div>
  );
};

Dashboard.Layout = LayoutDashboard;

export default Dashboard;
