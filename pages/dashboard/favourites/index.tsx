import LayoutDashboard from "../../../Common/LayoutDashboard";
import FavouriteBody from "../../../Components/dashboard/favourites/FavouriteBody";
import SecureRouter from "../../../Helper/SecureRouter";
import { NextPageWithLayout } from "../../../Models/common";

export const metadata = {
  title: "Dashboard Favourite Homy - Real Estate React Next js Template",
};
const FavouriteList: NextPageWithLayout = () => {
  return (
    <SecureRouter>
      <FavouriteBody />
    </SecureRouter>
  );
};

FavouriteList.Layout = LayoutDashboard;

export default FavouriteList;
