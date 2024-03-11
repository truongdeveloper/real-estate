import { useEffect } from "react";
import LayoutDefault from "../Common/Layout";
import { AppPropsWithLayout } from "../Models/common";
import "../styles/styles.scss";
import ScrollToTop from "../Common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? LayoutDefault;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <RecoilRoot>
      <Layout>
        <div>
          <ScrollToTop />
          <ToastContainer position="top-center" />
          <Component {...pageProps} />
        </div>
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
