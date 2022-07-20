import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // const { price } = useContext();
  const [productCart, setProductCart] = useState([]);
  // const [lowerFromCart, setLowerFromCart] = useState([]);

  const addProductToCart = (product) => {
    const { id } = product; // productID = id
    const exist = productCart.find((x) => x._id === id);
    if (exist) {
      setProductCart(
        productCart.map((x) =>
          x._id === id ? { ...exist, quntity: exist.quntity + 1 } : x
        )
      );
    } else {
      // const newProduct = product.find((x) => x._id === id);
      setProductCart([...productCart, { ...product, quntity: 1 }]);
    }
  };

  function getQuntity(id) {
    const product = productCart.find((p) => p._id === id);
    if (product) {
      return product.quntity;
    }
    return 0;
  }

  const Remove = (product) => {
    const { id } = product;

    const lower = productCart.find((x) => x._id === id);
    if (lower) {
      setProductCart(
        productCart.map((x) =>
          x._id === id ? { ...lower, quntity: lower.quntity - 1 } : x
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        productCart,
        addProductToCart,
        Remove,

        getQuntity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
