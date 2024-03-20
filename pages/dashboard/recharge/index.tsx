import LayoutDashboard from "../../../Common/LayoutDashboard";
import RechargeBody from "../../../Components/dashboard/recharge/RechargeBody";
import { NextPageWithLayout } from "../../../Models/common";

const Recharge: NextPageWithLayout = () => {
  return (
    <div>
      <RechargeBody />
    </div>
  );
};

Recharge.Layout = LayoutDashboard;

export default Recharge;
