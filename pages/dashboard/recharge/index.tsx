import LayoutDashboard from "../../../Common/LayoutDashboard";
import RechargeBody from "../../../Components/dashboard/recharge/RechargeBody";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const Recharge: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <RechargeBody />
    </SecureRouter>
  );
};

Recharge.Layout = LayoutDashboard;

export default Recharge;
