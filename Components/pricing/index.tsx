import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import PricingArea from "./PricingOneArea";

const PricingBody = () => {
  return (
    <>
      <Breadcrumb
        title="Mua gói"
        link="#"
        link_title=""
        sub_title="Mua gói"
        style={true}
      />
      <PricingArea />
      <FancyBanner />
    </>
  );
};

export default PricingBody;
