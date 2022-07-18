import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// import Image from "next/dist/client/image";

function TemporaryDrawer({ image, title, price, quntity }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (right, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [right]: open });
  };

  const list = (right) => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(right, false)}
      onKeyDown={toggleDrawer(right, false)}
    ></Box>
  );

  return (
    <div>
      {["right"].map((right) => (
        <div key={right}>
          <Button onClick={toggleDrawer(right, true)}>{right}</Button>
          <Drawer
            anchor="right"
            open={state[right]}
            onClose={toggleDrawer(right, false)}
          >
            {list(right)}
          </Drawer>
        </div>
      ))}
    </div>
  );

  //   <div className="product-info">
  //   <Image src={image} alt="" height={100} width={100} />
  //   <h5>{title}</h5>
  //   <h6>{price}</h6>
  //   <h6>{quntity}</h6>
  // </div>
}
export default TemporaryDrawer;
