const router = require("express").Router();
const task = require("../models/taskmodel");

router.post("/",async (req,res) => {

    try{
     const alltasks  = await task.find();
     console.log(alltasks);
     res.send({message : "login succesful",alltask : alltasks})

    } catch (err){
        console.log(err);
        res.status(500).send(); // internal server error
    }
 });

 module.exports = router;