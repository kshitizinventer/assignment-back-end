const router = require("express").Router();
const user = require("../models/usermodel");

router.post("/",async (req,res) => {

    try{
     const {name,email,password} = req.body;
     console.log(req.body);

    const existingUser = await user.findOne({email : email});
    console.log(existingUser);
    if(existingUser)
     return res.send({message : "This email id is already taken"});
   
        const newuser = new user({
             name,email,password
        });

        const savedUser = await newuser.save(err => {
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