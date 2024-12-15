import React from 'react'
import { IoEarth } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='flex flex-row bg-[#F55A5A] items-center justify-center p-4 gap-2'>
        <div className='text-2xl text-white'>
        <IoEarth />
        </div>
        <div className='text-white font-medium'>
            my travel journal.
        </div>
    </div>
  )
}

export default Header