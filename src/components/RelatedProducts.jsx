import React from 'react'
import Title from './Title'
import ProductCard from './ProductCard'
const RelatedProducts = ({category,subCategory}) => {
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1="related" text2="products"/>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          
        }
      </div>
    </div>
  )
}

export default RelatedProducts