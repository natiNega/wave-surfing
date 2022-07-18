import mongoose from "mongoose";
const Schema = mongoose.Schema;

const category = new Schema({
  categories:String,
  
});

mongoose.models = {};

const Category = mongoose.model("Category", category);

export default Category;
