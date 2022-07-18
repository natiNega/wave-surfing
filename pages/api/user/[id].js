import connectDB from "../../../middleware/mongodb";
import User from "../../../models/user";



const handler = async (req, res) => {
  if (req.method === "DELETE") {
    const { id } = req.query;
    // console.log("req.query", req.query);
    try {
      await User.findByIdAndDelete(id);
      res.status(200).send("DONE");
    } catch (err) {
      res.status(500).send(err.message);
    }
  } 

//   else if (req.method === "PATCH") {
//     const { id } = req.query;
//     const user = req.body;
    
//       try {
//         console.log(user    );
//         const user = await User.findByIdAndUpdate(id, user);
//         res.status(200).send(user);
//       } catch (err) {
//         res.status(403).send("user ID not found");
//       }
//     }
//   else {
//     res.status(422).send("req_method_not_supported");
//   }

};
export default connectDB(handler);
