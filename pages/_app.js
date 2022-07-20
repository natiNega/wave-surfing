import { useEffect, useState, useContext, createContext } from "react";
import Nevbar from "../components/Nevbar/nevbar";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import "../styles/globals.css";

import Product from "../components/Product/product";
import CartProvider from "../Context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Nevbar />
      <Component {...pageProps} />;
    </CartProvider>
  );
}

export default MyApp;
