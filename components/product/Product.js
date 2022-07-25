import * as React from "react";
import { useContext } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { CartContext } from "../../Context/CartContext";
import Link from "next/link";
import styles from "./Product.module.css";

const Product = (product) => {
  const { name, price, image, description, id, quntity } = product;
  const { addProductToCart, Remove, getQuntity,productCart ,newprice} = useContext(CartContext);
  // const { removeProduct, setRemoveProduct } = useState([]);

  // const { Remove } = useContext(CartContext);
  return (
    
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea className= {styles._card}>
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt="Suft Baord"
        />
        <CardContent>
          <Typography className= {styles._cardName} title={name} gutterBottom variant="h7" component="div" >
            {name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {description}
          </Typography> */}
          <Typography>{price} $</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <div className="product-card">
          <div className="product-image">
            Add To Cart{" "}
            <Button variant="text"
              onClick={() => addProductToCart(product)}
              className="plus-button plus-button--small"
            >
              +
            </Button>

            <Link href={`/details/${id}`}>
              <Button variant="text">Details</Button>
            </Link>

            {getQuntity(id) > 0 && (
              <Button variant="text"
                onClick={() => Remove(product)}
                className="minus-button minus-button--small"
              >
                -
              </Button>
            )}
          </div>
          <span>{getQuntity(id)}</span>
        </div>
      </CardActions>
    </Card>

  );
};

export default Product;
