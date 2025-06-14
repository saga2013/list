import React from 'react'
import image from '../assets/image.png';




const Card = ({ img, name, position }) => {
  return (
    <div className='w-[536px] h-[151px] bg-[#F2F2F2] flex items-center gap-[30px] rounded-2xl p-4 border-2 '>
      <div className='w-[135px] h-[135px] bg-[#FDE9CB] rounded-full overflow-hidden flex items-center justify-center'>
        <img src={image}  alt="" className='w-[81px] h-[81px]  ' />
      </div>
      <div>
        <h1 className='font-normal text-3xl'>{name}</h1>
        <p className='text-[#8E8080] text-1xl font-normal'>{position}</p>
      </div>
    </div>
  )
}

export default Card
