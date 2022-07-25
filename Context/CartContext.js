import { createContext, useState, useContext } from "react";

export const CartContext = createContext();


export default function CartProvider({ children }) {
  // const { price } = useContext();
  const [productCart, setProductCart] = useState([]);
  const addProductToCart = (product) => {
    const { id } = product; // productID = id

    // find the id from the product in the array cart
    const exist = productCart.find((x) => x._id === id);
    if (exist) {
      setProductCart(
        // if the id from the product finded on the array cart, increce the quntity +1
        productCart.map((x) =>
          x._id === id ? { ...exist, quntity: exist.quntity + 1 } : x
        )
      );
    } else {
      //if the product not fund add 1 quntity
      // const newProduct = product.find((x) => x._id === id);
      setProductCart([...productCart, { ...product, quntity: 1 }]);
    }
  };

  function getQuntity(id) {
    const product = productCart?.find((p) => p._id === id);
    if (product) {
      return product.quntity ;
    }
    return 0;
  }

  const Remove = (product) => {
    const { id } = product;
    const exist = productCart.find((x) => x._id === id);
    if (exist.quntity > 1) {
      setProductCart(
        productCart.map((x) =>
          x._id === id ? { ...exist, quntity: exist.quntity - 1 } : x
        )
      );
    } else {
      const removeFromCart = productCart.filter((x) => x._id !== id);
      setProductCart(removeFromCart);
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
