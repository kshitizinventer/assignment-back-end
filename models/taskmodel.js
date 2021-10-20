const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
    description : {type: String, required: true},
    time : {type: Number,required: true},
    assignedto : {type:String, required: true},
    status : {type: Boolean,required:true},
    timestamp : {type: Date,required:true}

});

const task = mongoose.model("task",taskschema);

module.exports = task;