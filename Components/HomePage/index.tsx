import Banner from "./Banner";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import BLockFeatureThree from "./BLockFeatureThree";
import Property from "./Property";
import FancyBannerOne from "./FancyBannerOne";

import BLockFeatureFive from "./BLockFeatureFive";
import FancyBannerThree from "./FancyBannerThree";
import FancyBanner from "../../Common/FancyBanner";

const HomePage = () => {
  return (
    <>
      <Banner />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      <BLockFeatureThree />
      <Property />
      <FancyBannerOne style={false} />
      <BLockFeatureFive style={false} />
      <FancyBanner style={false} />
      <FancyBannerThree />
    </>
  );
};

export default HomePage;
