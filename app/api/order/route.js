import { auth } from "@/auth";
import Order from "@/models/Order";
import User from "@/models/User";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try{
        DbConnect();
        let session = await auth();

        if(session){
            let user = await User.findOne({email:session.user.email});
            let order = await Order.findOne({user:user._id,isOrder:false})

            return NextResponse.json({order},{status:200})
        }
    }

    catch(error){
        return NextResponse.json({message:"Error",error:error.message},{status:500})
    }
}