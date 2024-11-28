"use client"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function ProductViewTop({data,user}) {

  const router = useRouter();

  const handleAddToCart = async () => {

    const respose = await fetch(`http://localhost:3000/api/order/add-to-cart/${data._id}`,{
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ user_id:user._id})
    });
    
    console.log("success after fetch" , data.message)
    router.push("/cart");
  };

  return (
    <Card className="w-full flex flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={`/productImages/${data.image}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.name}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {data.category}
        </Typography>

        <Typography color="gray" className="mb-8 font-normal">
          {data.description}
        </Typography>
        <a href="#" className="inline-block">
          <Button
            onClick={() => handleAddToCart ()}
            variant="text"
            className="flex  text-xl font-normal bg-orange-600 hover:bg-orange-800 text-white items-center gap-2"
          >
            ADD TO CART
          </Button>
        </a>
        <a href="" className=" inline-block ml-2">
          <Button
            variant="text"
            className="flex text-xl font-normal bg-teal-600 hover:bg-teal-800 text-white items-center gap-2"
          >
            BUY NOW
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
