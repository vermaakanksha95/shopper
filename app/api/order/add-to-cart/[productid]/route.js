import { auth } from "@/auth";
import Order from "@/models/Order";
import Product from "@/models/Product";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  DbConnect();
  let product;
  let { productid } = params;
  let { user_id } = await req.json();
  try {
    product = await Product.findById(productid);
    if (!product) {
      return NextResponse.json(
        { message: "Product Not Found" },
        { status: 404 }
      );
    }
    let order = await Order.findOne({ user: user_id, isOrder:false });
    if (!order) {
      order = await Order.create({
        user: user_id,
        items:[{ item:productid }]})
      }
    else {
      const existingItemIndex = order.items.findIndex(
        item => item.item.toString() === productid
      )
      if (existingItemIndex >= 0) {
        order.items[existingItemIndex].quantity += 1;
      } else {
        order.items.push({item:productid});
      }
      await order.save();
    }
    return NextResponse.json({ order })
 }
   catch (error) {
    return NextResponse.json(
      { message: "Error fetching product", error },
      { status: 500 }
    )
  }
}

