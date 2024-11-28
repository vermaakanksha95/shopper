"use client";

import DbConnect from "@/utils/dbConnect";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  
} from "@material-tailwind/react";
import { useState } from "react";

export function CouponForm({ handleInsertCoupon }) {
  DbConnect();

  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Create New Coupon
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Fill out this form to creata a new coupon.
      </Typography>
      <div className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Coupon Code
          </Typography>
          <Input
            size="lg"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g FIRST100, BIGBANG etc."
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Code Amount
          </Typography>
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Write Code Amount"
          />

          <Button
            className="mt-6"
            onClick={() => handleInsertCoupon(code, amount)}
            fullWidth
          >
            Create Coupon
          </Button>
        </div>
      </div>
    </Card>
  );
}
