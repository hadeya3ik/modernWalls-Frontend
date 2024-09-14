import React from 'react'
import ParallaxBg from './ParallaxBg'
import pic1 from '@/images/parlorSeating.jpg'
import pic2 from '@/images/Parlor.jpg'
import Image from 'next/image'

function About() {
  return ( <main className='font-ppNeueMontreal overflow-hidden'>
    <div className='md:p-16 sm:p-12 p-4 pb-40 flex flex-col gap-12'>
        <div className='flex justify-between md:flex-row flex-col-reverse gap-8'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl self-center whitespace-nowrap'>
                About Us 
            </h1>
            <div className='flex gap-4'>
               <Image src={pic2}  height={300}  alt="" objectFit="cover" layout='fixed' className='self-end' />
               <Image src={pic1}  height={300}  alt="" objectFit="cover" layout='fixed' className='self-end pb-8' />
            </div>
        </div>
        <div className='flex pt-4 flex-col md:flex-row gap-8'>
            <p className='max-w-lg'>
                Modern Walls is an interior design studio specializing in renovations, dedicated to transforming spaces. Our expertise lies in creating modern, stylish interiors that seamlessly blend innovation with timeless design elements, ensuring every work reflects our commitment to craftsmanship.
            </p>
            <p className='max-w-sm'>
                We focus on designing spaces that meet the needs of the people who use them.
            </p>
        </div>
    </div>
    <ParallaxBg/>
    </main>
  )
}

export default About