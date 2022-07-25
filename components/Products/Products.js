// import Link from "next/link";
import { Box, Grid } from "@mui/material";


import Product from "../product/Product";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";

function Products({ products }) {
  return (
    <>

    <Box sx={{flexGrow:1}}>
      <Grid container spacing={4}>
      {products?.map((product) => {
        return (
          
          <Grid item  key={product._id}>
           
            <Product
            {...product}
            id={product._id}
            numitem={product.numitem}
            name={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            image={product.image}
            quntity={product.quntity}
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
