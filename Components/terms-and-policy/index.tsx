import FancyBanner from "../../Common/FancyBanner";
import BreadcrumbTwo from "../../Helper/BreadcrumbTwo";
import TermsAndPolicyArea from "./TermsAndPolicy";

const TermsAndPolicyBody = () => {
  return (
    <>
      <BreadcrumbTwo
        title="Điều khoản & Chính sách"
        link="#"
        link_title="Pages"
        sub_title="Điều khoản & Chính sách"
        style={true}
      />
      <TermsAndPolicyArea />
      <FancyBanner style={false} />
    </>
  );
};

export default TermsAndPolicyBody;
