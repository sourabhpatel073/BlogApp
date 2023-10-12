const express = require("express");
const { BlogModel } = require("../Model/Blogmodel");

const BlogRoute = express.Router();

BlogRoute.post("/create", async (req, res) => {
  try {
    const Blog = new BlogModel(req.body);
    console.log(Blog);
    await Blog.save();
    res.status(200).send({ msg: "Blog Posted Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Something went wrong" });
  }
});

BlogRoute.get("/", async (req, res) => {
  try {
    const Blogs = await BlogModel.find();
    res.status(200).send(Blogs);
  } catch (err) {
    res.status(400).send({err:"Something went Wrong"})
  }
});

BlogRoute.get("/profile", async (req, res) => {
    try {
      const Blogs = await BlogModel.find({
        author_ID: req.body.author_ID,
      });
      res.status(200).send(Blogs);
    } catch (err) {
      res.status(400).send({err:"Something went Wrong"})
    }
  });


BlogRoute.patch("/update/:BlogId",async(req,res)=>{
    const BlogId=req.params
    const blog=await BlogModel.find({_id:BlogId})

    try{
        if(req.body.author_ID!==blog.author_ID){
        res.status(400).send({"msg":"You are not Authorized for it"})
        }
        else{
            await BlogModel.findByIdAndUpdate({_id:BlogId},req.body)
            res.status(200).send({
                msg:"The Blog has been updated"
            })
        }
    }catch(err){
        res.status(400).send({"msg":"You are not Authorized for it"})
    }
})


BlogRoute.delete("/delete/:BlogId",async(req,res)=>{
    const {BlogId}=req.params
    const blog=await BlogModel.find({ _id:BlogId })

    try{
        if(req.body.author_ID!==blog.author_ID){
        res.status(400).send({"msg":"You are not Authorized for it"})
        }
        else{
            await BlogModel.findByIdAndDelete({_id:BlogId},req.body)
            res.status(200).send({
                msg:"The Blog has been deleted"
            })
        }
    }catch(err){
        res.status(400).send({"msg":"You are not Authorized for it"})
    }
})

module.exports={BlogRoute}