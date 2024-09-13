import mongoose from "mongoose";

export default function DbConnect(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error("Failed to connect to MongoDB",err);

    }
}