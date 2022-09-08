// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/higher order components/Layout.js";
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
          <p>Learn more about crypto and NFTs!!</p>
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

Main.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// <main className={styles.main}>
// <div></div>
// </main>

// <Head>
// <title>Create Next App</title>
// <meta name="description" content="Generated by create next app" />
// <link rel="icon" href="/favicon.ico" />
// </Head>

// <main className={styles.main}>
// <Link className={styles.title} href="/about">
//   <a>About Page</a>
// </Link>

// <Link className={styles.title} href="/mainpage">
//   <a>Main Page</a>
// </Link>

// <Link className={styles.title} href="/authtesting">
//   <a>Authentication Testing Page</a>
// </Link>

// <Link className={styles.title} href="/prismatestingproducts">
//   <a>Prisma Testing Page Products</a>
// </Link>

// <Link className={styles.title} href="/prismatestingusers">
//   <a>Prisma Testing Page Users</a>
// </Link>

// <p className={styles.description}>
//   Get started by editing{" "}
//   <code className={styles.code}>pages/index.js</code>
// </p>

// <div className={styles.grid}>
//   <a href="https://nextjs.org/docs" className={styles.card}>
//     <h2>Documentation &rarr;</h2>
//     <p>Find in-depth information about Next.js features and API.</p>
//   </a>

//   <a href="https://nextjs.org/learn" className={styles.card}>
//     <h2>Learn &rarr;</h2>
//     <p>Learn about Next.js in an interactive course with quizzes!</p>
//   </a>

//   <a
//     href="https://github.com/vercel/next.js/tree/canary/examples"
//     className={styles.card}
//   >
//     <h2>Examples &rarr;</h2>
//     <p>Discover and deploy boilerplate example Next.js projects.</p>
//   </a>

//   <a
//     href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//     className={styles.card}
//   >
//     <h2>Deploy &rarr;</h2>
//     <p>
//       Instantly deploy your Next.js site to a public URL with Vercel.
//     </p>
//   </a>
// </div>
// </main>

// <footer className={styles.footer}>
// <a
//   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Powered by{" "}
//   <span className={styles.logo}>
//     <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//   </span>
// </a>
// </footer>
