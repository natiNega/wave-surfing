import Image from "next/image";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

const Product = ({ title, price, image, description }) => {
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
                onClick={() => onAdd(id)}
                className="plus-button plus-button--small"
              >
                +
              </button>
              <button
                onClick={() => remove(id)}
                className="minus-button minus-button--small"
              >
                -
              </button>
              <button onClick={() => ProductDetails(id)}>Details</button>
            </div>
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default Product;
