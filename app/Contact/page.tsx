import React from 'react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import Navigation from '@/components/Navigation'


function page() {
  return (
    <main className=''>
    <NavBar/>
    <Navigation/>
    <div className='md:px-12 sm:p-8 p-4 font-ppNeueMontreal'>
        <h1 className='md:px-12 sm:p-8 p-4 md:text-5xl sm:text-4xl text-3xl'>
            Get in Touch
        </h1>
        <p className='md:px-12 sm:px-8 px-4'>
            For new project inquiries, you can reach us by filling out the form below.
        </p>
    </div>
    <div className='flex justify-between gap-40 md:p-24 sm:p-16 p-8'>
    <Form/>
    <div className='flex gap-12 flex-col'>
        <div className='flex flex-col items-end gap-2 justify-end  sm:text-md text-sm font-ppNeueMontreal'>
            <p>1234567-89</p>
            <p>xxx Address, City</p>
            <p>Province, Country</p>
            <Link href='/' className='cursor-pointer'>Instagram</Link>
            <Link href='/' className='cursor-pointer'>Tiktok</Link>
            <Link href='/' className='cursor-pointer'>Facebook</Link>
        </div>
        <h1 className='md:text-5xl sm:text-4xl text-3xl mix-blend-difference self-end'>
            companyname@ex.com
        </h1>
        <div className='flex flex-col items-end gap-2 justify-end  sm:text-md text-sm font-ppNeueMontreal'>
            <p>We welcome your inquiries by phone or e-mail</p>
        </div>
    </div>
    </div>
    </main>
  )
}


function Form() {
    return (
        <div className="contact-form-container font-ppNeueMontreal  flex-1">
      <h2 className="text-3xl mb-4 ">Contact</h2>
      <form className="flex flex-col gap-2 ">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <input
          type="tel"
          name="number"
          placeholder="Number"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="text-xl w-full p-1 bg-gray-100 focus:outline-none"
        />
        <button
          type="submit"
          className="mt-4 w-fit px-4 border border-black hover:bg-black hover:text-white transition-all focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
    )
}

export default page