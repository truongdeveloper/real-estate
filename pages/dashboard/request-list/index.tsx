import LayoutDashboard from "../../../Common/LayoutDashboard";
import RequestListBody from "../../../Components/dashboard/request-list";
import { NextPageWithLayout } from "../../../Models/common";

const RequestList: NextPageWithLayout = () => {
  return (
    <div>
      <RequestListBody />
    </div>
  );
};

RequestList.Layout = LayoutDashboard;

export default RequestList;
