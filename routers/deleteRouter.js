const router2 = require("express").Router();
const task = require("../models/taskmodel");

router2.post("/:id",async (req,res) => {

    try{
      const s = await task.findOneAndRemove({_id : req.params.id}, function(err){
        if(err){
            res.send("err");
        } else {
            res.send({message : "delete succesful"});
        }
     }).clone();

    //  res.send({message : req.params.id});

    } catch (err){
        console.log(err);
        res.status(500).send("hey"); // internal server error
    }
 });

 module.exports = router2;