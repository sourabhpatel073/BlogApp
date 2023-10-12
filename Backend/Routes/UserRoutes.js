const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Model/UserModel");
const UserRoute = express.Router();
const jwt=require("jsonwebtoken")
UserRoute.use(express.json());

//Signup
UserRoute.post("/signup", async (req, res) => {
  let { email, password, userName } = req.body;

  try {
    bcrypt.hash(password, 5, async function (err, hash) {
      const user = new UserModel({ email, password: hash, userName });

      await user.save();

      console.log(user);

      res.status(200).send({ msg: "User Added Successfully" });
    });
  } catch (err) {
    console.log("action is failed due to err");
    res.status(400).send({ msg: "User Registeration Fail" });
  }
});


//login

UserRoute.post("/login",async(req,res)=>{

    const {email,password}=req.body

    try{
        const user=await UserModel.findOne({email})
        console.log("user");
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
               if(err){
                console.log(err)
               }
               
               if(result){
                const token=jwt.sign ({
                    authorID:user._id,
                    authore:user.userName
                },"masai")
                res.status(200).send({"msg":"login success",token:token})
               }else{
                res.status(400).send({"msg":"Wrong details"})
               }
            })
        }else{
            res.status(400).send({"msg":"Something went wrong please check your details"})
        }
    }catch(err){
        res.status(400).send({"msg":"Something went wrong please check your details"})
    }
})

module.exports={UserRoute}