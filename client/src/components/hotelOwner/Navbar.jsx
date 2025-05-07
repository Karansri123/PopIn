import React from 'react'
import {Link} from 'react-router-dom'
import {UserButton} from '@clerk/clerk-react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300'>
        <Link to={'/'}  className="flex gap-1">
        <img
          src="/favicon.png"
          alt="logo"
          className='h-9 '
        />
        <h2
          className={`text-3xl font-semibold`}
        >
          PopIn
        </h2></Link>
        <UserButton/>
    </div>
  )
}

export default Navbar