import BreadcrumbTwo from "../../Helper/BreadcrumbTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";

import FancyBanner from "./FancyBanner";

const AboutUsBody = () => {
  return (
    <>
      <BreadcrumbTwo title="About Us" sub_title="About us" />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      <FancyBanner />
    </>
  );
};

export default AboutUsBody;
