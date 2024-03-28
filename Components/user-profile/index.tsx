import { useRouter } from "next/router";
import FancyBanner from "../../Common/FancyBanner";
import Breadcrumb from "../../Helper/Breadcrumb";
import AgencyDetailsArea from "./AgencyDetailsArea";
import { useEffect } from "react";

const UserDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    console.log([router.query, id ?? null]);
  }, [router.query, id]);
  return (
    <>
      <Breadcrumb
        title="Agent Details"
        link="agent"
        link_title="Agent"
        sub_title="Mathews Firlo"
        style={false}
      />
      <AgencyDetailsArea />
      <FancyBanner />
    </>
  );
};

export default UserDetails;
