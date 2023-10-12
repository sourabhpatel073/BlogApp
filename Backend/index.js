const express=require("express")
const { connection } = require("./db")
const { UserRoute } = require("./Routes/UserRoutes")
const { BlogRoute } = require("./Routes/BlogRoutes")
const { auth } = require("./Middleware.js/auth")
require("dotenv").config()
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/user",UserRoute)

app.get("/getall", async (req, res) => {
  try {
    const Blogs = await BlogModel.find();
    res.status(200).send(Blogs);
  } catch (err) {
    res.status(400).send({err:"Something went Wrong"})
  }
});
app.use(auth)
app.use("/blogs",BlogRoute)

app.listen(process.env.port,async()=>{

    try {
       await connection
        console.log("connected to DB");
      } catch (err) {
        console.log("error", err);
      }
      console.log("server is running");

})