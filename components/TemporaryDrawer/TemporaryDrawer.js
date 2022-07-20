import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import Image from "next/dist/client/image";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Product from "../product/Product";
import { Divider } from "@mui/material";

function TemporaryDrawer() {
  const { productCart } = useContext(CartContext);
  const [showCart, setShowCart] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setShowCart(true)}>right</Button>
      <Drawer anchor="right" open={showCart} onClose={() => setShowCart(false)}>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Shop Cart:
        </h3>
        {productCart.map((product) => (
          <Product key={product._id} {...product} />
        ))}
        <footer>
          <h3>Sub total: </h3>
        </footer>
      </Drawer>
    </div>
  );

  {
    /* // <div className="product-info">
//   <Image src={image} alt="" height={100} width={100} />
//   <h5>{title}</h5>
//   <h6>{price}</h6>
//   <h6>{quntity}</h6>
// </div>; */
  }
}
export default TemporaryDrawer;
