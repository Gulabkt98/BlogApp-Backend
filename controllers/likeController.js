 //import model
 const Post= require("../models/postModel");
 const Like =require("../models/likemodel");

 //like a post
   exports.likePost= async (req,res)=>{
      try{
         const{post,user}=req.body;
         const like=new Like({
            post,user,
         });
         const savedLike=await like.save();


         //update the post collection basis on this 
          const updatedPost= await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true});
           res.json({
            post:updatedPost,
           })
      }
      catch(error){
           console.error("Error in likePost:", error.message)
           return res.status(400).json({
            error:"Error while fetching post",
           });

      }
   }
 
 
 
 
 exports.dummyLink=(req,res)=>{
    res.send("This is your  Dummy page");
 } 