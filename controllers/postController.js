const Post =require("../models/postModel");
const Comment =require("../models/commentModel");
const Like =require("../models/likemodel");

exports.createPost =async (req ,res)=>{
    try{
       const{title,body}=req.body;
       const post = new post ({
        title,body,
       })

       const savedPost = await post.save();
       res.json({
        post:savedPost,
       })

    }
    catch(error){
        return res.status(400).json({
            error:"Error while creating post",
        })

    }
};

// get all post 
exports.getAllPosts = async (req,res)=>{
    try{
        const posts= await  Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error){
       console.error("Error while creating post:", error);
        return res.status(500).json({
            success: false,
            message: "Error while creating post",
            error: error.message,
        });
    }
}