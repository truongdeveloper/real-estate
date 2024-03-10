import type { NextPage } from "next";
import { NextPageWithLayout } from "../Models/common";
import LayoutDefault from "../Common/Layout";
import HomePage from "../Components/home-one";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

Home.Layout = LayoutDefault;

export default Home;
