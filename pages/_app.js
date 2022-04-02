import "../styles/globals.css";
import Layout from "../components/higher order components/Layout.js";
import { ProvideUsername } from "../store/UsernameProvider/UsernameProvider.js";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideUsername>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvideUsername>
  );
}

export default MyApp;
