import { useEffect, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import MyApp from "./_app";
// import TopPage from "../components/Top page";
// import { homeButtons } from "/data/home-buttons";
import Products from "../components/Products/Products";
// import Carousel from "nuka-carousel";

import { SocialDistance } from "@mui/icons-material";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import { useState } from "react";
import { PromiseProvider } from "mongoose";
import Carousel from "nuka-carousel";
import Nevbar from "../components/Nevbar/nevbar";
// import VideoPlayer from "../components/Media-player/Media Player";
// import { products } from "../components/Products"

export default function Home() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((_products) => {
  //       setProducts(_products);
  //       // console.log(_products);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Wave Surf</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Products products={products} /> */}
      {/* <TemporaryDrawer /> */}

      {/* <Carousel wrapAround={true} slidesToShow={1} autoplay={1500}>
        <Image
          src="/surfing-sunseat.png"
          alt="dog"
          width={2500}
          height={1000}
        />
        <Image
          src="/SurftheWorld333.jpg"
          alt="surf"

          width={2500}
          height={1000}
        />
        <Image src="/men-surfing.jpg" alt="dog" width={2500} height={1000} />
        <Image src="/girl-.png" alt="dog" width={2500} height={1000} />
      </Carousel> */}
      {/* <br />
      <br /> */}

      {/* <section className={styles.grid}>
        {homeButtons.map(({ route, src, title }) => (
          <Link key={route} href={route}>
            <a>
            <div
              className={styles.card}
              style={{
                width: 500,
                height: 380,
                backgroundImage: `url('${src}')`,
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  color: "white",
                  border: "2px Solid",
                }}
              >
                {title}
              </h2>
              <Image alt={title} src={src} width={400} height={400} />
            </div>
            </a>
          </Link>
        ))}
      </section> */}

      <br />
      <br />
      {/* <Products /> */}
      {/* <VideoPlayer /> */}

      <main className={styles.main}>
      <Nevbar />
        {/* <div>
          <Image
          src="/tony-pham-6_ufQUUbX7E-unsplash.jpg"
          alt="demo"
          width={900}
          height={650}
          // layout="fill"
          />
          
        </div> */}
        {/* <Carousel /> */}
        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
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
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  );
}
