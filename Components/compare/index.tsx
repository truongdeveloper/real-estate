import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import CompareArea from "./CompareArea";

const CompareBody = () => {
  return (
    <>
      <Breadcrumb title="So sánh" link="/compare" link_title="So sánh" />
      <CompareArea />
      <FancyBanner />
    </>
  );
};

export default CompareBody;
