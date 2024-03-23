import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import CompareArea from "./CompareArea";

const CompareBody = () => {
  return (
    <>
      <Breadcrumb
        title="Compare"
        link="#"
        link_title="Pages"
        sub_title="Compare"
      />
      <CompareArea />
      <FancyBanner />
    </>
  );
};

export default CompareBody;
