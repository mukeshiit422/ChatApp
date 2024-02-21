const mongoose=require("mongoose")
const validator=require("validator")

//chat schema
const userSchema=new mongoose.Schema({

})

//user chat table
const userChat=new mongoose.model("userChat",userSchema);

module.exports=userChat;