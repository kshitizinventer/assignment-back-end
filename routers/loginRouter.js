const router1 = require("express").Router();
const user = require("../models/usermodel");

router1.post("/",async (req,res) => {

    try{
     const {email,password} = req.body;
     console.log(req.body);

    const existingUser = await user.findOne({email : email});
    console.log(existingUser);
    if(existingUser){
       if(password === existingUser.password)
         res.send({message : "login succesful",user : existingUser});
        else
          res.send({message : "wrong password"});
    }
    else
     return res.send({message : "user not registered"});

    } catch (err){
        console.log(err);
        res.status(500).send(); // internal server error
    }
 });

 module.exports = router1;