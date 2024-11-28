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
    let order = await Order.findOne({ user: user_id, isOrder: false });
    if (order) {
      const existingItemIndex = order.items.findIndex(
        (item) => item.item.toString() === productid
      );
      if (existingItemIndex >= 0) {
        if (order.items[existingItemIndex].quantity <= 1) {
           order.items.splice(existingItemIndex);
        } else {
          order.items[existingItemIndex].quantity -= 1;
        }
      }

      await order.save();
    }

    return NextResponse.json(
      { order, message: "Add to cart done" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching product", error },
      { status: 500 }
    );
  }
}
