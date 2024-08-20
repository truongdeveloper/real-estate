import LayoutDashboard from "../../../Common/LayoutDashboard";
import PostListBody from "../../../Components/dashboard/post-list";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const PropertyList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <PostListBody />
    </SecureRouter>
  );
};

PropertyList.Layout = LayoutDashboard;

export default PropertyList;
