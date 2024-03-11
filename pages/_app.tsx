import { useEffect } from "react";
import LayoutDefault from "../Common/Layout";
import { AppPropsWithLayout } from "../Models/common";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? LayoutDefault;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
