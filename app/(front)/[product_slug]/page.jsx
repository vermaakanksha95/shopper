import React from 'react'
import { ProductViewTop } from './_components/productviewtop'
import DbConnect from '@/utils/dbConnect';
import Product from '@/models/Product';
import ProductSection from '../components/product-section';
import { auth } from '@/auth';
import User from '@/models/User';

const page = async ({params}) => {
  const {product_slug} = params;
  const session = await auth();

 
  DbConnect();
  const singleProduct = await Product.findOne({slug:product_slug,status:true})
  const relatedProduct = await Product.find({});

  // get user logic
  let user = null;
  if(session){
   user = await User.findOne({email:session.user.email});
    
  }
  
  return (
    <div className=' px-[5%]'>
    <div className=' flex flex-1  mt-5'>
        <ProductViewTop data={singleProduct} user={user}/>
        </div>
    <div className='flex flex-1 flex-col mt-10'>
      <h2 className='text-2xl'>Related Products</h2>
       <ProductSection data={relatedProduct}/>
       </div>
    </div>
  )
}
export default page
