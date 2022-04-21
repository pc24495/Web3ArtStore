import "../styles/globals.css";
import Layout from "../components/higher order components/Layout.js";
import { ProvideUsername } from "../store/UsernameProvider/UsernameProvider.js";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ProvideUsername>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideUsername>
    </SessionProvider>
  );
}

export default MyApp;
