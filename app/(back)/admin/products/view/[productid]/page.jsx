import Product from "@/models/Product";
import DbConnect from "@/utils/dbConnect";
import React from "react";
import DescriptionForm from "./_components/DescriptionForm";
import PriceForm from "./_components/PriceForm";
import DiscountPrice from "./_components/DiscountPrice";
import CategoryForm from "./_components/CategoryForm";
import Category from "@/models/Category";
import StockForm from "./_components/StockForm";
import BarcodeForm from "./_components/BarcodeForm";
import BrandForm from "./_components/BrandForm";
import TitleForm from "./_components/TitleForm";
import SlugForm from "./_components/SlugForm";
import ImageForm from "./_components/ImageForm";
import PublishButton from "./_components/publish-button";

const page = async ({ params }) => {
  const { productid } = params;
  DbConnect();
  const category = await Category.find({});
  const product = await Product.findById(productid).populate("category");

  const  total_fields =  ["name","description","price","discount_price","stock","brand","barcode","category","image","slug"];
  const filledFields = total_fields.filter((field) =>product[field]).length;
  const remainingFields = total_fields.filter((field) =>!product[field]);

  return (
    <div>
      <div className=" flex flex-1 flex-col">
        <div className="flex flex-1 justify-between">
        <h2 className=" text-xl font-semibold">Edit Products</h2>
        <PublishButton className={!remainingFields ??"cursor-not-allowed"}/>
        </div>
        <div className=" flex flex-1 gap-3">
        <p>Total Fields:{total_fields.length}</p>
        <p>Filled Fields:{filledFields}</p>
        </div>
      </div>
      <div className=" grid grid-cols-3  gap-2 ">
        <TitleForm
          label="Product Title"
          field={product.name}
          productid={productid}
        />
        <DescriptionForm
          label="Product Description"
          productid={productid}
          field={product.description}
        />
        <PriceForm
          label="Product Price"
          productid={productid}
          field={product.price}
        />

        <DiscountPrice
          label=" Discount Price"
          productid={productid}
          field={product.discount_price}
        />

        <CategoryForm
          data={category}
          label="Product Category"
          productid={productid}
          field={product.category?.cat_title}
          cat_id={product.category?._id}
        />
        <StockForm
          label="Product Stock"
          productid={productid}
          field={product.stock}
        />

        <SlugForm
          label="Product Slug"
          productid={productid}
          field={product.slug}
        />
        <BarcodeForm
          label="Product Barcode"
          productid={productid}
          field={product.barcode}
        />
        <BrandForm
          label="Product Brand"
          productid={productid}
          field={product.brand}
        />
        <ImageForm
          label="Product Image"
          productid={productid}
          field={product.image}
        />
      </div>
    </div>
  );
};

export default page;
