const mongoose=require("mongoose")
const BlogSchema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:String,required:true},
    author_ID:{type:String,required:true},
    category: {type:String,required:true},

})

const BlogModel=mongoose.model("Blog",BlogSchema)

module.exports={BlogModel}