import { createContext, useState, useContext } from "react";
import Cart from "../components/cart/Cart";
import Product from "../components/Product/product";

export const CartContext = createContext();

export default function CartProvider() {
  const [productCart, setProductCart] = useState([]);

  const onAdd = (productId) => {
    const exist = productCart.find((x) => x.id === productId);
    if (exist) {
      setProductCart(
        productCart.map((x) =>
          x.id === productId ? { ...exist, quntity: exist.quntity + 1 } : x
        )
      );
    } else {
      const newProduct = products.find((x) => x.id === productId);
      setProductCart([...productCart, { ...newProduct, quntity: 1 }]);
    }
  };
  return (
    <CartContext.Provider value={{ onAdd }}>
      <Cart />
      <Product />
    </CartContext.Provider>
  );
}
