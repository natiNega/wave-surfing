import { useEffect, useState, useContext, createContext } from "react";
import Nevbar from "../components/Nevbar/nevbar";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"
import Product from "../components/Product/product";
import CartProvider from "../Context/CartContext";
import Carousel from "../components/carousel/Carousel"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <CartProvider>
      <Nevbar />
      <Carousel />
      <Component {...pageProps} />;
    </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
