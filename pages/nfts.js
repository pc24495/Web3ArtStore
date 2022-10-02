import AlwaysMobileLayout from "../components/higher order components/AlwaysMobileLayout.js";
import classes from "../styles/NFT.module.css";
import NFTPage from "../components/NFTPage/NFTPage.js";
import { useRouter } from "next/router";

export default function Nfts() {
  const router = useRouter();

  if (router.query) {
    console.log(router.query);
  }

  return (
    <div className={classes.NFTs}>
      <NFTPage></NFTPage>
    </div>
  );
}

Nfts.getLayout = function getLayout(page) {
  return <AlwaysMobileLayout>{page}</AlwaysMobileLayout>;
};
