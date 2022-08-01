import { Grid, Link } from "@mui/material";
import { homeButtons } from "../../data/home-buttons";
import React from "react";
import styles from "../../styles/Home.module.css";

export const Homebuttens = () => {
  return (
    <Grid container sx={{display:"flex",flexFlow:"row",marginleft: 50,justifyContent:"space-evenly" }}>
      {/* <section className={styles.grid}> */}
        {homeButtons.map(({ route, src, title }) => (
          <Grid item key={route} >
            <Link key={route} href={route}>
              {/* <a> */}
              <div
                className={styles.card}
                style={{
                  width: 200,
                  height: 210,
                  backgroundImage: `url('${src}')`,
                  backgroundSize: "cover",
                  // display: "flex",
                  // justifyContent: "space-between",
                  // alignItems: "center",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    // border: "2px Solid",
                  }}
                  >
                  {title}
                </h2>
                {/* <Image alt={title} src={src} width={400} height={400} /> */}
                  </div>
                  
                </Link>
          </Grid>
        ))}
      {/* </section> */}
    </Grid>
  );
};
