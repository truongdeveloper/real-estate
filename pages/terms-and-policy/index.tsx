import LayoutDefault from "../../Common/Layout";
import PricingBody from "../../Components/pricing";
import TermsAndPolicyBody from "../../Components/terms-and-policy";
import UserDetails from "../../Components/user-profile";
import { NextPageWithLayout } from "../../Models/common";

const TermsAndPolicyPage: NextPageWithLayout = () => {
  return (
    <div>
      <TermsAndPolicyBody />
    </div>
  );
};

TermsAndPolicyPage.Layout = LayoutDefault;

export default TermsAndPolicyPage;
