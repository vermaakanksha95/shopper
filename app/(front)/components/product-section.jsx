import React from 'react'
import { ProductCard } from './product-card'

const ProductSection = () => {
  return (
    <div className=' grid gap-5 grid-cols-2 md:grid-cols-4'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      
    </div>
  )
}

export default ProductSection