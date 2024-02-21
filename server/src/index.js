const express=require("express");
const cors=require("cors");

require("./db/conn")
const app=express();
const router=require('./router/router')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(router);

  
const server=app.listen(process.env.PORT,()=>{
  console.log(`server is running on port,${process.env.PORT}`);
});