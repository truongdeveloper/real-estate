import LayoutDashboard from "../../../Common/LayoutDashboard";
import PostListBody from "../../../Components/dashboard/post-list";
import { NextPageWithLayout } from "../../../Models/common";

const PropertyList: NextPageWithLayout = () => {
  return (
    <div>
      <PostListBody />
    </div>
  );
};

PropertyList.Layout = LayoutDashboard;

export default PropertyList;
