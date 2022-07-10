import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import MyApp from "./_app";
// import TopPage from "../components/Top page";
import { homeButtons } from "/data/home-buttons";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Wave Surf</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <homeButtons className={styles.grid}>
        {homeButtons.map(({ route, src, title }) => (
          <Link key={route} href={route}>
            {/* <a> */}
            <div
              className={styles.card}
              style={{
                width: 300,
                height:300,
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                }}
              >
                {title}
              </h2>
              {/* <Image alt={title} src={src} width={400} height={400} /> */}
            </div>
            {/* </a> */}
          </Link>
        ))}
      </homeButtons>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <main className={styles.main}>
        <div>
          <Image
            src="/tony-pham-6_ufQUUbX7E-unsplash.jpg"
            alt="demo"
            width={900}
            height={650}
            // layout="fill"
          />
        </div>
        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
