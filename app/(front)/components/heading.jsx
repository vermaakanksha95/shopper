import React from 'react'

const Heading = ({color,title,subtitle}) => {
  return (
    <div className={`flex flex-1 ${color} text-white gap-2 flex-col py-10 px-[5%]`}>
        <h1 className=' text-3xl font-semibold capitalize'>{title}</h1>
        <p className='text-xs font-light'>{subtitle}</p>
        </div>
  )
}

export default Heading
