import { auth } from "@/auth";
import Order from "@/models/Order";
import Product from "@/models/Product";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST (req,{params}){
    

    
    DbConnect();
    let product;
    let { productid } = params;
    let {user_id} = await req.json();
    try{
        product = await Product.findById(productid);
        if(!product){
            return NextResponse.json({message:"Product Not Found"},{status:404})
        }

        let order = await Order.create({user:user_id,items:[{item:productid}]});
         return NextResponse.json({ order });

    }
    catch(error){
        return NextResponse.json({message:"Error fetching product",error},{status:500})
    }
}
    