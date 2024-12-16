import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <p className='text-gray-500 capitalize'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-14 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title