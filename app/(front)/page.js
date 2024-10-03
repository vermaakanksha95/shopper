import React from 'react'

import { Banner } from './components/banner'
import { CategoriesList } from './components/categories-list'
import ProductSection from './components/product-section'
import DbConnect from '@/utils/dbConnect'
import Category from '@/models/Category'
import SignIn from './components/login'
import { auth } from '@/auth'



const page = async () => {
  const session = await auth();
  DbConnect();
  let categories = await Category.find({});
 
  return (
    <div>
      {!session?.user && <SignIn />}
      {session?.user && (
        <>
          <Banner />

          <div className=" flex flex-1 gap-5 md:flex-row flex-col px-10 mt-5  ">
            <div className=" w-3/12">
              <CategoriesList data={categories} />
            </div>
            <div className="w-9/12">
              <ProductSection />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default page
