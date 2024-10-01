import React from 'react'
import { ProductCard } from './product-card'
import Product from '@/models/Product';

export default async  function  ProductSection (){

   let products = await Product.find({status:true});
  return (
    <div className=' grid gap-5 grid-cols-2 md:grid-cols-4'>
      {
        products.map((product,index) => (<ProductCard data={product} key={index}/>))

      }
      </div>
  )
}



