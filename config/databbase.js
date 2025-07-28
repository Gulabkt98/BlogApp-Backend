//import mongoose//
const mongoose= require("mongoose");
// load dotenv config
require("dotenv").config();
const connectwithdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("Database connect succesfully")
    )
    .catch((err)=>{
        console.log("database is not connected");
        console.error(err);
        process.exit(1);

    })
}
module.exports=connectwithdb;
