import { auth } from "@/auth";
import Order from "@/models/Order";
import Product from "@/models/Product";
import DbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  DbConnect();

  let { productid } = params;
  let product;
  let { user_id } = await req.json();
  try {
    product = await Product.findById(productid);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 400 }
      );
    }

    let order = await Order.findOne({ user: user_id, isOrder: false });
    if (!order) {
      order = await Order.create({
        user: user_id,
        items: [{ item: productid }],
      });
    } else {
      const existingItemIndex = order.items.findIndex(
        (item) => item.item.toString() === productid
      );

      if (existingItemIndex >= 0) {
        order.items[existingItemIndex].quantity += 1;
      } else {
        order.items.push({ item: productid });
      }
      await order.save();
    }
    return NextResponse.json(
      { order, message: "Add to cart done" },
      { status: 200 }
    );
  } catch (error) {
    //let product  = await Product.findById(productid);
    return NextResponse.json(
      { message: "Error fetching product", error: error.message },
      { status: 500 }
    );
  }
}
