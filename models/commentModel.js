//import mongooose
const mongoose =require("mongoose");

//route handler
 const commentSchema = new mongooose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", //refernce to post model
    },
    user:{
       type:String,
       required:true,
    },
    body:{
        type:String,
        required:true,

    }
 });

 module.exports=mongoose.model("comment",commentSchema);