 const router = require("express").Router();
 const user = require("../models/usermodel");

 router.post("/",async (req,res) => {

    try{
     const { email,password,passwordVerify} = req.body;
     console.log(email);
     if(!email || !password || !passwordVerify)
       return res
         .status(400)
         .json({error: "Please fill all the fields"});

    const existingUser = await user.findOne({email});
    console.log(existingUser);
    if(existingUser)
        return res.send({message : "This email id is already taken"});
   
        const newuser = new user({
             email,password
        });

        const savedUser = await newuser.save();

    } catch (err){
        console.log(err);
        res.status(500).send(); // internal server error
    }
 });

 module.exports = router;
