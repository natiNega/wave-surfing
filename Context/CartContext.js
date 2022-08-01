import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  // const { price } = useContext();
  const [productCart, setProductCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  // useEffect(() => console.log(productCart), [productCart]);

  const addProductToCart = (product) => {
    const { _id } = product; // productID = _id

    const { price } = product;
    // find the _id from the product in the array cart
    const exist = productCart.find((x) => x._id === _id);
    // console.log(exist, _id);
    if (exist) {
      setProductCart(
        // if the _id from the product finded on the array cart, increce the quntity +1
        productCart.map((x) =>
          x._id === _id ? { ...exist, quntity: exist.quntity + 1 } : x
        )
      );
      setSubTotal(subTotal + price);
    } else {
      //if the product not fund add 1 quntity
      // const newProduct = product.find((x) => x._id === _id);
      setProductCart([...productCart, { ...product, quntity: 1 }]);
      setSubTotal(subTotal + price);
    }
  };

  function getQuntity(id) {
    const product = productCart?.find((p) => p._id === id);
    if (product) {
      return product.quntity;
    }
    return 0;
  }

  const Remove = (product) => {
    const { _id } = product;
    const { price } = product;
    const exist = productCart.find((x) => x._id === _id);
    if (exist.quntity > 1) {
      setProductCart(
        productCart.map((x) =>
          x._id === _id ? { ...exist, quntity: exist.quntity - 1 } : x
        )
      );
      setSubTotal(subTotal - price);
    } else {
      const removeFromCart = productCart.filter((x) => x._id !== _id);
      setSubTotal(subTotal - price);
      setProductCart(removeFromCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        productCart,
        addProductToCart,
        Remove,
        subTotal,

        getQuntity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
