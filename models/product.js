import mongoose from "mongoose";
const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  numitem: {
    type: Number,
  },
  image: {
    type: String,
  },

  type: {
    type: String,
  },
  quntity: {
    type: Number,
  },
});

mongoose.models = {};

const Product = mongoose.model("Product", product);

export default Product;
