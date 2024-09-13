import DbConnect from "@/utils/dbConnect";
import { redirect } from "next/navigation";

import React from "react";
import { CategoryForm } from "../_components/category-form";
import Category from "@/models/Category";

const page = () => {
  const handleInsertCategory = async (cat_title, cat_description) => {
    "use server";
    DbConnect();
    let data = await Category.create({ cat_title, cat_description });

    redirect("/admin/category");
  };

  return (
    <div className=" flex flex-1 justify-center">
      <CategoryForm handleInsertCategory={handleInsertCategory} />
    </div>
  );
};

export default page;
