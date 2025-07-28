// Import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Controller logic to create a comment
exports.createComment = async (req, res) => {
    try {
        // 1. Fetch data from request body
        const { post, user, body } = req.body;

        // 2. Create a comment object
        const comment = new Comment({
            post,
            user,
            body,
        });

        // 3. Save the new comment into the database
        const savedComment = await comment.save();

        // 4. Find the post by ID and push the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comments: savedComment._id } },  
            { new: true }
        )
        .populate("comments") // ✅ this assumes Post has a 'comments' field with ref to Comment model
        .exec();

        // 5. Send response
        return res.status(200).json({
            success: true,
            message: "Comment added successfully",
            post: updatedPost,
        });
    } catch (error) {
        console.error("Error while creating comment:", error);
        return res.status(500).json({
            success: false,
            message: "Error while creating comment",
            error: error.message,
        });
    }
};
