import BreadcrumbTwo from "../../Helper/BreadcrumbTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";

import FancyBanner from "./FancyBanner";

const AboutUsBody = () => {
  return (
    <>
      <BreadcrumbTwo title="Về chúng tôi" sub_title="Về chúng tôi" />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      <FancyBanner />
    </>
  );
};

export default AboutUsBody;
