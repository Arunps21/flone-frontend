import React from 'react'
import { exchange, quality, support } from '../assets/icons/icons'

const OurPolicies = () => {
  return (
    <section className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img className='w-12 m-auto mb-2' src={exchange} alt="" />
            <p className='font-semibold mb-3'>Easy Exchange Policy</p>
            <p className='text-gray-400'> We offer hastle free exchange policy</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-2' src={quality} alt="" />
            <p className='font-semibold mb-3'>7 Days Return Policy</p>
            <p className='text-gray-400'> We provide 7 days free return policy</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-2' src={support} alt="" />
            <p className='font-semibold mb-3'>Best Customer Support</p>
            <p className='text-gray-400'> We provide 24/7 customer support</p>
        </div>
    </section>
  )
}

export default OurPolicies