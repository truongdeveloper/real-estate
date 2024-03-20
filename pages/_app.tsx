import { useEffect } from "react";
import LayoutDefault from "../Common/Layout";
import { AppPropsWithLayout } from "../Models/common";
import "../styles/styles.scss";
import ScrollToTop from "../Common/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "/node_modules/react-toastify/dist/ReactToastify.css";
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
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            theme="dark"
            limit={5}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss={false}
          />
          <Component {...pageProps} />
        </div>
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
