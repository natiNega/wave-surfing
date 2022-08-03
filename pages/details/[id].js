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
import Modal from "../../components/modal/Modal";
import { server } from '../../config'

function Details() {
  const [details, setDetails] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    fetch(`${server}/api/details/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.log("details", details);

  const { addProductToCart, Remove, product, getQuntity } =
    useContext(CartContext);

  return (
    <Modal>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea className="_card">
          <CardMedia
            component="img"
            height="350"
            image={details?.image}
            alt="Suft Baord"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {details?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details?.description}
            </Typography>
            <Typography>{details?.price} $</Typography>
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
    </Modal>
  );
}

export default Details;
