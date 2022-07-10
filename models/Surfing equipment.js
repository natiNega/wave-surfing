import mongoose from "mongoose";
const Schema = mongoose.Schema;

const surfing_equipment = new Schema({
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


});

mongoose.models = {};

const Surfing_equipment = mongoose.model("Surfing_equipment", surfing_equipment);

export default Surfing_equipment;
