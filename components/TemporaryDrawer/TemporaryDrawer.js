import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import Image from "next/dist/client/image";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Product from "../product/Product";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import styles from "../TemporaryDrawer/TemporaryDrawer.module.css"

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
} from "@mui/material";

function TemporaryDrawer() {
  const { productCart, getQuntity, Remove, addProductToCart,product } = useContext(CartContext);
  const [showCart, setShowCart] = React.useState(false);
  return (
    // <grid  key={product.id} container spacing ={0} >
    <div>
      <Button onClick={() => setShowCart(true)}><ShoppingCartRoundedIcon  sx={{color:"black"}}/></Button>
      <Drawer anchor="right" open={showCart} onClose={() => setShowCart(false)}>
        <h3 style={{ display: "flex", justifyContent: "center" }}>
          Shop Cart:
        </h3>
        {productCart?.map((product) => {
          return (
            
              <Card  key={product.id} className="_productCard" sx={{maxWidth: 350, maxHeigth: 350}} >
                <CardActionArea className="_card" >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={product.image}
                    alt="Suft Baord"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography> */}
                    <Typography>{product.quntity * product.price} $</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div className="product-card">
                    <div className="product-image">
                      Add To Cart{" "}
                      <button
                        onClick={() => addProductToCart(product)}
                        className="plus-button plus-button--small"
                      >
                        +
                      </button>
                      <Link href={`/details/${product.id}`}>
                        <button>Details</button>
                      </Link>
                      {getQuntity(product.id) > 0 && (
                        <button
                          onClick={() => Remove(product)}
                          className="minus-button minus-button--small"
                        >
                          -
                        </button>
                      )}
                    </div>
                    <span>{getQuntity(product.id)}</span>
                  </div>
                </CardActions>
              </Card>
            
            
            );
          })}
        <footer>
          <h3 style={{ display: "flex", justifyContent: "center" }}>
        
            Sub total:{""}
          </h3>
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
