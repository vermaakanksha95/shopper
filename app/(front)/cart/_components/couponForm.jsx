"use client"
import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'

const CouponForm = () => {
  return (
   
      <form action="" method="post" className='flex gap-2 p-3 border w-full mt-4'>
        <Input type="text" placeholder="Enter Coupon Code" className=' w-full ' />
        <Button type="submit" className=" bg-black text-white px-3 py-2">
          GO
        </Button>
      </form>
    
  );
}

export default CouponForm
