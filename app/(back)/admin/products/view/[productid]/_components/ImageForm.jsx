"use client";
import { Button, Input, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ImageForm = ({ label, field, productid }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(field);

  const router = useRouter();

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:3000/api/product/${productid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image }),
      });
    } catch (error) {
      console.log(error);
    }
    setIsEdit(false);
    setImage(field);
    router.refresh();
  };

  return (
    <form className="mt-8 mb-2  flex-1 bg-gray-100 p-5 rounded-lg ">
      <div className="mb-1 flex flex-col gap-6">
        <div className="flex justify-between items-center border-b pb-2">
          <Typography variant="h6" color="blue-gray" className="-mb-3 flex-1">
            {label}
          </Typography>
          <Button size="" onClick={() => setIsEdit(!isEdit)}>
            Edit
          </Button>
        </div>

        {isEdit ? (
          <div className="flex">
            <Input
            type="file"
              size="lg"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className=" rounded-none flex-1 bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Button
              className="rounded-none w-auto  font-light"
              fullWidth
              onClick={handleUpdate}
            >
              GO
            </Button>
          </div>
        ) : field ? (
          <p className=" text-xl ">{field}</p>
        ) : (
          <p className=" text-xl italic">{label} is empty</p>
        )}
      </div>
    </form>
  );
};

export default ImageForm;