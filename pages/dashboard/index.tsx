import { NextPageWithLayout } from "../../Models/common";
import LayoutDashboard from "../../Common/LayoutDashboard";
import DashboardBody from "../../Components/dashboard/index/DashboardBody";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { loginModalState } from "../../Recoil/atoms/modal";
import LoginModal from "../../Common/modals/LoginModal";
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
