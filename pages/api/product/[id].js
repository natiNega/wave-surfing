import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    // console.log("req.query", req.query);
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).send("DONE");
    } catch (err) {
      res.status(500).send(err.message);
    }
  } 

  else if (req.method === "PATCH") {
    const { id } = req.query;
    const product = req.body;
    
      try {
        console.log(product);
        const products = await Product.findByIdAndUpdate(id, product);
        res.status(200).send(products);
      } catch (err) {
        res.status(403).send("product not found");
      }
    }
  else {
    res.status(422).send("req_method_not_supported");
  }

};
export default connectDB(handler);
