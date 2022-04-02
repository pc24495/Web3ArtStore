import Image from "next/image";
import classes from "../styles/Main.module.css";

export default function Main({ title, ...props }) {
  return (
    <div className={classes.Main}>
      <div className={classes.ImageContainer}>
        <Image
          src="/NFTStockImage.jpeg"
          width={6500}
          height={3656}
          layout="responsive"
        ></Image>
      </div>
      <div className={classes.AnnouncementBar}>
        <span className={classes.AnnouncementBarInner}>
          <h3>BUY ONLINE AND PICK UP IN STORE</h3>
          <p>Learn more about crypto and NFTs!</p>
        </span>
      </div>
      <div className={classes.ArtPhotosMusicTokens}>
        <div className={classes.SecondGrid}>
          <div className={classes.Art}>
            <Image
              src="/Art.jpeg"
              width={5338}
              height={5339}
              layout="responsive"
            ></Image>
            <div className={classes.APMSOverlay}></div>
            <div className={classes.APMSLabel}>
              <p>Art</p>
            </div>
          </div>
          <div className={classes.Photos}>
            <Image
              src="/Photos.jpeg"
              width={2469}
              height={3696}
              layout="responsive"
            ></Image>
            <div className={classes.APMSOverlay}></div>
            <div className={classes.APMSLabel}>
              <p>Photos</p>
            </div>
          </div>
          <div className={classes.Music}>
            <Image
              src="/Music.jpeg"
              width={2407}
              height={3008}
              layout="responsive"
            ></Image>
            <div className={classes.APMSOverlay}></div>
            <div className={classes.APMSLabel}>
              <p>Music</p>
            </div>
          </div>
          <div className={classes.Stories}>
            <Image
              src="/Stories.jpeg"
              width={4000}
              height={6000}
              layout="responsive"
            ></Image>
            <div className={classes.APMSOverlay}></div>
            <div className={classes.APMSLabel}>
              <p>Stories</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.FirstGrid}>
        <div className={classes.ImageContainer}>
          <Image
            src="/ShutterstockArt.jpeg"
            width={6500}
            height={3656}
            layout="responsive"
          ></Image>
          <div className={classes.FirstGridBox}>
            <p>Digital Art</p>
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/MusicDrops.jpeg"
            width={5120}
            height={2880}
            layout="responsive"
          ></Image>
          <div className={classes.FirstGridBox}>
            <p>Music Drops</p>
          </div>
        </div>
      </div>
      <div className={classes.ThirdGrid}>
        <div className={classes.ImageContainer2}>
          <Image
            src="/SetUpStore.jpeg"
            width={3543}
            height={2480}
            layout="responsive"
          ></Image>
          <div className={classes.ThirdGridBox}>
            <p>Set Up A Store</p>
          </div>
        </div>
        <div className={classes.ImageContainer2}>
          <Image
            src="/Web3Beighe.jpeg"
            width={7680}
            height={4320}
            layout="responsive"
          ></Image>
          <div className={classes.ThirdGridBox}>
            <p>Learn About Crypto</p>
          </div>
        </div>
        <div className={classes.ImageContainer2}>
          <Image
            src="/CommissionArt.jpeg"
            width={3600}
            height={2700}
            layout="responsive"
          ></Image>
          <div className={classes.ThirdGridBox}>
            <p>Commission Art</p>
          </div>
        </div>
      </div>
    </div>
  );
}
