import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, category, description, price, numitem, image, type } =
      req.body;
    if (name) {
      try {
        const product = new Product({
          name,
          category,
          description,
          price,
          numitem,
          image,
          type,
          
        });
        // Create new product
        const productCreated = await product.save();

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
