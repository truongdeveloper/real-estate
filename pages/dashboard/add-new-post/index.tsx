import LayoutDashboard from "../../../Common/LayoutDashboard";
import AddPropertyBody from "../../../Components/dashboard/add-new-post/AddPropertyBody";
import { NextPageWithLayout } from "../../../Models/common";

const AddNewPost: NextPageWithLayout = () => {
  return (
    <div>
      <AddPropertyBody />
    </div>
  );
};

AddNewPost.Layout = LayoutDashboard;

export default AddNewPost;
