import React from 'react'
import { IoEarth } from 'react-icons/io5'

const Header = () => {
  return (
    <div className='flex flex-row bg-rose-500 text-center items-center justify-center p-4 gap-2'>
        <div className='text-3xl text-white'>
        <IoEarth />
        </div>
        <div className='text-white font-medium'>
            my travel journal.
        </div>
    </div>
  )
}

export default Header