import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [logginError, setLogginError] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      router.push("/pets");
    }
  }, [loggedIn]);

  const logginFunc = (event) => {
    event.preventDefault();
    console.log(event.target.elements.username.value);

    if (
      event.target.elements.username.value === "Tanuja" &&
      event.target.elements.password.value === "SecretPassword"
    ) {
      router.push("/pets");
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <form className={styles.Block1} onSubmit={logginFunc}>
          <label htmlFor="username">Username</label>
          <input className={styles.UsernameInput} id="username"></input>
          <label htmlFor="password">Password</label>
          <input className={styles.PasswordInput} id="password"></input>
          {logginError && <p>Wrong username/password!</p>}
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}

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
