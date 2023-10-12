const express=require("express")
const { connection } = require("./db")
require("dotenv").config()
let app=express()


app.listen(process.env.port,async()=>{

    try {
       await connection
        console.log("connected to DB");
      } catch (err) {
        console.log("error", err);
      }
      console.log("server is running");

})