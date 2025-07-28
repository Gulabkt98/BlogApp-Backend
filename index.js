// create instance of server
const express=require("express");
const app = express();

//import dotenv config //find port number

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

// import routes
const blog = require("./routes/blog");
 //mount
 app.use("/api/v1" ,blog);

 //connect with database
 const connectwithdb= require("./config/databbase");
 connectwithdb();

 //activate server
 app.listen(PORT,()=>{
    console.log(`App started at  port no  ${PORT}`);
 })
// default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is Homepage Baby</h1>`);
})

