// import classes from "../styles/Login.module.css";
import Layout from "../components/higher order components/Layout.js";
import classes from "../styles/NFT.module.css";

// import LoginComponent from "../components/Login/Login.js";
import { useRouter } from "next/router";

export default function Nfts() {
  const router = useRouter();

  if (router.query) {
    console.log(router.query);
  }

  return <div className={classes.NFTs}></div>;
}

Nfts.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
