import connectDB from "../../../middleware/mongodb";
import CartProduct from "../../../models/cartOrder";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name,product,user} =
      req.body;
    if (name) {
      try {
        const cartProduct = new CartProduct({
            product,
            user,
        
        });
        // Create new product
        const productCreated = await cartProduct.save();

        res.status(200).send(productCreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  }

  else if (req.method === "GET") {
    try {
      // console.log("req.method", req.method);
      const products = await Product.find();
      res.status(200).send(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

};

export default connectDB(handler);
