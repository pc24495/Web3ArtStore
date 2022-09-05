import "../styles/globals.css";
import Layout from "../components/higher order components/Layout.js";
import { ProvideUserData } from "../store/UserDataProvider/UserDataProvider.js";
// import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ProvideProfilePic } from "../store/ProfilePicProvider/ProfilePicProvider.js";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ProvideProfilePic>
      <ProvideUserData>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideUserData>
    </ProvideProfilePic>
  );
}

export default MyApp;
