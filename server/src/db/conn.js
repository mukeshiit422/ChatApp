const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MongoDb_url,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>console.log("db is connected."))
  .catch((e)=>console.log("error while creating database",e))
