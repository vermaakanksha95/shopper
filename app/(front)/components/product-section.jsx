import React from "react";
import { ProductCard } from "./product-card";
import Product from "@/models/Product";

export default async function ProductSection({ searchTerm }) {
  let query = (searchTerm
    ? { status: true, category: searchTerm }
    : { status: true });
  let products = await Product.find(query);
  return (
    <div className=" grid gap-5 grid-cols-2 md:grid-cols-4">
      {(products.length > 0)?
      products.map((product, index) => (
        <ProductCard data={product} key={index} />)):
        <h2>No Products Found</h2>
    
      }
    </div>
  );
}
