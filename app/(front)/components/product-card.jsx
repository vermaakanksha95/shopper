"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export function ProductCard({data}) {
  return (
    <Link href={`/${data.slug}`}>
    <Card className="  flex-1 flex flex-col">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={`/productImages/${data.image}`}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {data.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-red-500">
            {data.discount_price ? "₹" + data.discount_price : "₹" + data.price}
          </Typography>
        </div>

        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 "
        >
          {data.description.substr(0,100)}
        </Typography>
      </CardBody>
      
    </Card>
    </Link>
  );
}
