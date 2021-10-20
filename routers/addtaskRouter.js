const router = require("express").Router();
const task = require("../models/taskmodel");

router.post("/",async (req,res) => {

    try{
     const {description,time,assignedto,status,timestamp} = req.body;
     console.log(req.body);
   
        const newtask = new task({
           description,time,assignedto,status,timestamp
        });

        const savedtask = await newtask.save(err => {
            if(err)
             res.send(err);
            else
             res.send({message: "Successfully Registered"});
        });

    } catch (err){
        console.log(err);
        res.status(500).send(); // internal server error
    }
 });

 module.exports = router;