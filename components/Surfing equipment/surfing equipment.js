// import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Product from "../product/Product";
import Styles from "./surfing equipment.module.css";


function Equipment() {
  const [equipment, setequipment] = useState([]);
  useEffect(() => {
    fetch("/api/surfing_equipment")
      .then((res) => res.json())
      .then((equipment) => setequipment(equipment));
  }, []);
  return (
    <div className={Styles.AllCards}>
    <Box sx={{ flexGrow: 1 }}>  
      <section className="Products">
        <Grid container spacing={1}>
          {equipment?.map((equipment) => {
            return (
              <Grid item key={equipment._id}>
                <Product
                  // key={equipment._id}
                  {...equipment}
                  // id={equipment._id}
                  // numitem={equipment.numitem}
                  // name={equipment.title}
                  // category={equipment.category}
                  // description={equipment.description}
                  // price={equipment.price}
                  // image={equipment.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
    </Box>
    </div>
  );
}

export default Equipment;
