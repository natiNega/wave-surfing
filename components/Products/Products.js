// import Link from "next/link";
import { Box, Grid } from "@mui/material";
import styles from "./Products.module.css";

import Product from "../Product/Product";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

function Products({ products }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className={styles.cards}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Surf Boards
        </h1>
        <Grid container spacing={4}>
          {products?.map((product) => {
            return (
              <Grid item key={product._id}>
                <Product
                  {...product}
                  // id={product._id}
                  // numitem={product.numitem}
                  // name={product.title}
                  // category={product.category}
                  // description={product.description}
                  // price={product.price}
                  // image={product.image}
                  // quntity={product.quntity}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
