const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    senderId:{
        type:String
    },
    reciverId:{
      type:String
    },
    text:{
        type:String
    }
  },{
    timestamps:true,
  }
);

module.exports = mongoose.model("Message", messageSchema);