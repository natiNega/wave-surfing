import connectDB from "../../../middleware/mongodb";
import Surfing_equipment from "../../../models/Surfing equipment";


const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    // console.log("req.query", req.query);
    try {
      await Surfing_equipment.findByIdAndDelete(id);
      res.status(200).send("DONE");
    } catch (err) {
      res.status(500).send(err.message);
    }
  } 

  else if (req.method === "PATCH") {
    const { id } = req.query;
    const surfing_equipment = req.body;
    
      try {
        // console.log(surfing_equipment);
        const equipments = await Surfing_equipment.findByIdAndUpdate(id, surfing_equipment);
        res.status(200).send(equipments);
      } catch (err) {
        res.status(403).send("surfing_equipment not found");
      }
    }
  else {
    res.status(422).send("req_method_not_supported");
  }

};
export default connectDB(handler);
