import LayoutDashboard from "../../../Common/LayoutDashboard";
import AddPropertyBody from "../../../Components/dashboard/add-new-post/AddPropertyBody";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

const AddNewPost: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <AddPropertyBody />
    </SecureRouter>
  );
};

AddNewPost.Layout = LayoutDashboard;

export default AddNewPost;
