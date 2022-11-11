import "../styles/globals.css";
import Layout from "../components/higher order components/Layout.js";
import OuterLayout from "../components/higher order components/OuterLayout.js";
import { ProvideUserData } from "../store/UserDataProvider/UserDataProvider.js";
// import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ProvideProfilePic } from "../store/ProfilePicProvider/ProfilePicProvider.js";
import { ProvideMobileSidebarData } from "../store/MobileSidebarProvider/MobileSidebarProvider.js";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ProvideMobileSidebarData>
      <ProvideProfilePic>
        <ProvideUserData>
          <OuterLayout>{getLayout(<Component {...pageProps} />)}</OuterLayout>
        </ProvideUserData>
      </ProvideProfilePic>
    </ProvideMobileSidebarData>
  );
}

// <ProvideProfilePic>
//   <ProvideUserData>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </ProvideUserData>
// </ProvideProfilePic>;

export default MyApp;
