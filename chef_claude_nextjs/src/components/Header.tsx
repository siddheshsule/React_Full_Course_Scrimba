import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex flex-row gap-3 items-center justify-center p-5 bg-gray-100 shadow-md'>
            <img src="/chef-claude-icon.png" alt="chef claude icon" className='w-[60px] h-auto'/>
            <h1 className='text-4xl font-bold'>Chef Claude</h1>
        </div>

    </div>
  )
}

export default Header