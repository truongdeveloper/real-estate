import LayoutDefault from "../Common/Layout";
import { AppPropsWithLayout } from "../Models/common";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? LayoutDefault;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
