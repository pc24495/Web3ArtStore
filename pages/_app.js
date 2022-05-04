import "../styles/globals.css";
import Layout from "../components/higher order components/Layout.js";
import { ProvideUsername } from "../store/UsernameProvider/UsernameProvider.js";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <UserProvider>
      <ProvideUsername>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideUsername>
    </UserProvider>
  );
}

export default MyApp;
