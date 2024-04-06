import LayoutDashboard from "../../../Common/LayoutDashboard";
import PaymentListBody from "../../../Components/dashboard/payment-list";
import SecureRouter from "../../../Helper/SecureRouter";

import { NextPageWithLayout } from "../../../Models/common";

const PaymentList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <PaymentListBody />
    </SecureRouter>
  );
};

PaymentList.Layout = LayoutDashboard;

export default PaymentList;
