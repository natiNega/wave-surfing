// import { useEffect, useState, useContext, createContext } from "react";
// import Nevbar from "../components/Nevbar/nevbar";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
// import Product from "../components/Product/product";
import CartProvider from "../Context/CartContext";
// import Carousel from "../components/carousel/Carousel";
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import { Homebuttens } from "../components/button/Homebuttens";
// import VideoPlayer from "../components/Media-player/Media Player";
// import Link from "next/link";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
      {/* <Link  href="/" ><HomeRoundedIcon  sx={{color:"black" }} /></Link> */}

      <TemporaryDrawer />
        {/* <Carousel /> */}
        {/* <VideoPlayer /> */}
        {/* <Homebuttens /> */}
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
