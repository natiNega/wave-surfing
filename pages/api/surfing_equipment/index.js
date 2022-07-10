import connectDB from "../../../middleware/mongodb";
import Surfing_equipment from "../../../models/Surfing equipment";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, category, description, price, numitem, image } =
      req.body;
    if (name) {
      try {
        const surfing_equipment = new Surfing_equipment({
          name,
          category,
          description,
          price,
          numitem,
          image,
          
          
        });
        // Create new surfing_equipment
        const equipmentCreated = await surfing_equipment.save();

        res.status(200).send(equipmentCreated);
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
      const surfing_equipments = await Surfing_equipment.find();
      res.status(200).send(surfing_equipments);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

};

export default connectDB(handler);
