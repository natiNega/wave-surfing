import connectDB from "../../../middleware/mongodb";
import Product from "../../../models/product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { id } = req.query;
    // console.log("req.query", req.query);
    try {
      const product = await Product.findById(id);
      res.status(200).send(product);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};
export default connectDB(handler);