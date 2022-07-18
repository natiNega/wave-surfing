import mongoose from "mongoose";
import Surfboard from "../../models/product";
import Equipment from "../../components/Surfing equipment/surfing equipment"

function SurfingEquipmentPage() {
  const handler = async (req, res) => {
    if (req.method === "GET") {
      // Check if name, email or password is provided
      const { name, category, description, price, numitem, image } =
        req.body;
      if (name) {
        try {
          const surfboard = new Surfboard({
            name,
            category,
            description,
            price,
            numitem,
            image,
           
          });
          // Create new surfboard
          const surfboardCreated = await surfboard.save();

          res.status(200).send(surfboardCreated);
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

  // const Surfboard = mongoose.model("Surfboard", {
  //   name: String,
  //   category: String,
  //   description: String,
  //   price: Number,
  //   numitem: Number,
  //   image: String,
  //   type: String,
  //   // rating: { rate: Number, count: Number },
  // });
  // app.get("/products", (req, res) => {
  //   const { title } = req.query;
  //   Products.find().then((product) => {
  //     const filteredproducts = title
  //       ? product.filter((data) =>
  //           data.title.toLowerCase().includes(title.toLowerCase())
  //         )
  //       : product;

  //     res.send(filteredproducts);
  //   });
  // });

  return (
    <>
    <h1>Surfing Equipment</h1>
    
    <Equipment />
    </>
)};

export default SurfingEquipmentPage;
