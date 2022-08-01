import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartOrder = new Schema({
  title: String,

  image: {
    type: String,
  },
  quntity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  
});

mongoose.models = {};

const CartOrder = mongoose.model("CartOrder", cartOrder);

export default CartOrder;
