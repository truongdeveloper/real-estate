import LayoutDashboard from "../../../Common/LayoutDashboard";
import RequestListBody from "../../../Components/dashboard/request-list";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const RequestList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <RequestListBody />
    </SecureRouter>
  );
};

RequestList.Layout = LayoutDashboard;

export default RequestList;
