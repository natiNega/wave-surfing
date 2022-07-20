import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CartContext } from "../../Context/CartContext";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import Image from "next/image";

function Details() {
  const [details, setDetails] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetch(`/api/description/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  });

  const { title, description, image, price } = useContext(CartContext);

  return (
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
          </div>
        </div>
      </CardActions>
    </Card>
  );
}

export default Details;
