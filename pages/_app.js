import { useEffect, useState,useContext, createContext } from "react";
import Nevbar from "../components/Nevbar/nevbar";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import "../styles/globals.css";
import {CartContext} from "../Context/CartContext";
import Cart from "../components/cart/Cart";
import Product from "../components/Product/product";
import CartProvider from "../Context/CartContext"





function MyApp({ Component, pageProps }) {
  
  const {CartContext} = createContext();
  return (
    
    <CartContext>
      <TemporaryDrawer />
      <Nevbar />
      <Component {...pageProps} />;
      <Cart />
     <Product />
  </CartContext>
  
  );
}

export default MyApp;
