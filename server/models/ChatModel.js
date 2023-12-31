const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
   {
    members:{
        type:Array
    },
    text: {
        type:String
    }
   },{
    timestamps:true
   }
);

module.exports = mongoose.model("Chat", chatSchema);