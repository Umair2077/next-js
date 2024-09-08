import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <Link href="\" className='flex items-center justify-evenly h-14 bg-lime-950 text-white'>Home Page</Link>
        <Link href="\about" className='flex items-center justify-evenly h-14 bg-lime-950 text-white'>About us</Link>
        <Link href="\contact" className='flex items-center justify-evenly h-14 bg-lime-950 text-white'>Contact Us</Link>
    </div>
  )
}

export default Header