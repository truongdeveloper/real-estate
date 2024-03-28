import LayoutDashboard from "../../../Common/LayoutDashboard";
import PaymentListBody from "../../../Components/dashboard/payment-list";

import { NextPageWithLayout } from "../../../Models/common";

const PaymentList: NextPageWithLayout = () => {
  return (
    <div>
      <PaymentListBody />
    </div>
  );
};

PaymentList.Layout = LayoutDashboard;

export default PaymentList;
