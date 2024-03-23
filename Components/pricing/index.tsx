import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import PricingArea from "./PricingOneArea";

const PricingBody = () => {
  return (
    <>
      <Breadcrumb
        title="Pricing Plan"
        link="#"
        link_title="Pages"
        sub_title="Pricing"
        style={true}
      />
      <PricingArea />
      <FancyBanner />
    </>
  );
};

export default PricingBody;
