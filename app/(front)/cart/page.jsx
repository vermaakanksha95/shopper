import React from 'react'
import Heading from '../components/heading';
import { CartList } from './_components/cartlist';
import { PriceBreak } from './_components/priceBreak';
import CouponForm from './_components/couponForm';


export default async function page(){
return (
    <>
    <Heading color="bg-black" title="My Cart" subtitle="Manage your cart by adding some products"/>
      <div className=" px-[5%] flex flex-1 gap-4 mt-5">
        <div className="w-9/12">
        
          <CartList order = {order[0].item} /> 
        
        </div>
        <div className="w-3/12">
        <PriceBreak/>
        <CouponForm/>
        </div>
      </div>
    </>
  );
}


