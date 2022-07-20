import * as React from "react";
import { useContext } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

import { CartContext } from "../../Context/CartContext";
import Link from "next/link";

const Product = (product) => {
  const { title, price, image, description, id, quntity } = product;
  const { addProductToCart, Remove, getQuntity } = useContext(CartContext);
  // const { removeProduct, setRemoveProduct } = useState([]);

  // const { Remove } = useContext(CartContext);
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea className="_card">
          <CardMedia
            component="img"
            height="350"
            image={image}
            alt="Suft Baord"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography>{price} $</Typography>
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
              {getQuntity(id) > 0 && (
                <button
                  onClick={() => Remove(product)}
                  className="minus-button minus-button--small"
                >
                  -
                </button>
              )}
              <Link href={`/details/${id}`}>
                <button>Details</button>
              </Link>
            </div>
            <span>{getQuntity(id)}</span>
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
