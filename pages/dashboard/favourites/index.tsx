import LayoutDashboard from "../../../Common/LayoutDashboard";
import FavouriteBody from "../../../Components/dashboard/favourites/FavouriteBody";
import { NextPageWithLayout } from "../../../Models/common";

export const metadata = {
  title: "Dashboard Favourite Homy - Real Estate React Next js Template",
};
const FavouriteList: NextPageWithLayout = () => {
  return (
    <div>
      <FavouriteBody />
    </div>
  );
};

FavouriteList.Layout = LayoutDashboard;

export default FavouriteList;
