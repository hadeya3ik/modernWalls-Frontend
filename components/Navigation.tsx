import React from 'react'
import Link from 'next/link';

function Navigation() {
  return (
    <div className='pr-[50px] z-[99] border-8 text-base hidden md:flex md:absolute md:p-12 sm:p-8 p-4 absolute top-0 w-[100%] justify-center text-nowrap font-ppNeueMontreal'>
        <ul className='flex sm:gap-8 gap-2 pt-2'>
            <Link href='/' className='cursor-pointer'>Home</Link>
            <Link href='/Services' className='cursor-pointer'>Services</Link>
            <Link href='/Contact' className='cursor-pointer'>Contact</Link>
        </ul>
    </div>
  )
}

export default Navigation