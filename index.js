const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const task = require("./models/taskmodel");
const user = require("./models/usermodel");

const cors = require("cors");

dotenv.config();


// set up seerver

const app = express();
app.listen(5000,() => console.log('listening on port 5000'));

app.use(express.json());
app.use(cors());

// connect to mongoose

mongoose.connect(process.env.MDB_CONNECT,(err) => {
    if(err) return console.log(err);
    console.log("connected to mongoose");
})


const r = setInterval(async function(){ 
	
            const alltasks  = await task.find();
            console.log("hey");
            alltasks.forEach(async task1 => {

                const current = new Date();
                const postedtime = new Date(task1.timestamp);
                const millisec = current - postedtime;
                const secs = millisec/1000;
                const mins = secs/60;
                const hours = mins/60;
                const timeleft = task1.time - hours;
                if(timeleft <= 0){
                   if(task1.assignedto === "user1"){
                    console.log("status2");
                     const s = await task.updateOne({_id : task1._id}, {
                        $set : {
                           timestamp : new Date(),
                           assignedto : "user2"
                        }
                       });
                    }else{
                        const s = await task.updateOne({_id : task1._id}, {
                            $set : {
                               timestamp : new Date(),
                               assignedto : "user1"
                            }
                           });
                    }


                }
                   
            });
       
        
}, 600000);

// set up routes
app.use("/register",require("./routers/registerRouter"));
app.use("/login",require("./routers/loginRouter"));
app.use("/addtask",require("./routers/addtaskRouter"));
app.use("/delete",require("./routers/deleteRouter"));
app.use("/donetask",require("./routers/doneRouter"));
app.use("/",require("./routers/homepageRouter"));

// app.use("/auth",require("./routers/userRouter"));


