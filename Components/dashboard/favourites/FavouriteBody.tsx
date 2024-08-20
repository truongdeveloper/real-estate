"use client";
import DashboardHeader from "../../../Common/LayoutDashboard/Header/DashboardHeader";
import FavouriteArea from "./FavouriteArea";

const FavouriteBody = () => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader title="Yêu thích" />
        <FavouriteArea />
      </div>
    </div>
  );
};

export default FavouriteBody;
