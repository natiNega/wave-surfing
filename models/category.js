import mongoose from "mongoose";
const Schema = mongoose.Schema;

const category = new Schema({
  categories: {
    type: String,
  },
});

mongoose.models = {};

const Category = mongoose.model("Category", category);

export default Category;
