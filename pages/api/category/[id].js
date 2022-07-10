import connectDB from "../../../middleware/mongodb";
import Category from "../../../models/category";

const handler = async (req, res) => {
  if (req.method === "PATCH") {
    const { id } = req.params;
    if (categories) {
      try {
        const category = new Category({
          categories,
        });
        {
          console.log(category);
        }
        const categoryCreated = await category.save();

        res.status(200).send(categoryCreated);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};
export default connectDB(handler);
