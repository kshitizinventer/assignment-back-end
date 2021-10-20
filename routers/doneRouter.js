const router2 = require("express").Router();
const task = require("../models/taskmodel");

router2.post("/:id",async (req,res) => {

    try{
      const s = await task.updateOne({_id : req.params.id}, {
        
        $set : {
            status : true
        }
     });

     res.send({message : "updated successfully"});

    } catch (err){
        console.log(err);
        res.status(500).send("hey"); // internal server error
    }
 });

 module.exports = router2;