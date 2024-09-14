'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic1 from '@/images/slideShowKitchen.png';
import pic2 from '@/images/slideShowOffice.png';
import pic3 from '@/images/slideShowMedia.png';
import pic4 from '@/images/slideShowBathroom.png';
import pic5 from '@/images/chocalateThemeLiving.jpg';
import { StaticImageData } from 'next/image';

interface Project {
  title: string;
  src: StaticImageData;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Kitchens',
    src: pic1,
    color: '#000000',
  },
  {
    title: 'Office',
    src: pic2,
    color: '#8C8C8C',
  },
  {
    title: 'Media Walls',
    src: pic3,
    color: '#EFE8D3',
  },
  {
    title: 'Bathrooms',
    src: pic4,
    color: '#706D63',
  },
];

interface ModalProps {
  active: boolean;
  index: number;
}

export default function Services() {
  const [modal, setModal] = useState<ModalProps>({ active: false, index: 0 });

  return (
    <main className="font-ppNeueMontreal flex flex-col md:p-16 sm:p-12 p-4 py-16 border-b border-black">
        <Image
            className='md:-mb-40 mb-0'
            key={`modal_`}
            src={pic5}
            height={400}
            alt={` Image`}
        />
        <motion.div
        initial={{  }}
        className="sticky top-12 h-[500px] w-[335px] overflow-hidden self-end  hidden md:block">
            <div
                style={{ top: modal.index * -100 + '%' }}
                className="absolute transition-[top] duration-500">
                {projects.map((project, index) => (
                <Image
                    key={`modal_${index}`}
                    src={project.src}
                    height={500}
                    className='z-50'
                    alt={`${project.title} Image`}
                />
                    ))}
            </div>
        </motion.div>
        <div className='flex'>
            <div className='flex gap-8 pb-8 flex-col pt-4 flex-1 pr-4'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl self-start pb-8 pt-4'>
                    Our services
                </h1>
                <p className='max-w-lg'>
                At Modern Walls, we offer a wide range of interior design services tailored to bring your vision to life. Whether you're renovating your home or designing a new space, we provide creative and functional solutions. Our expertise covers everything from lighting to ceiling modeling, with an eye for detail and quality craftsmanship. We specialize in decorative elements such as sculptures, framing, chandeliers, and mirrors, ensuring each piece enhances the overall look and feel of your space.
                </p>
                <p className='sm:max-w-md max-w-lg self-end'>
                Our attention to detail ensures that every aspect of your project reflects your style. Whatever your design needs, Modern Walls is here to transform your space into something truly special.
                </p>
            </div>
            <div className="hidden md:block h-[500px] w-[335px] overflow-hidden"></div>
        </div>
        <div className='w-full flex justify-end'>
            
        </div>
      <div className="flex flex-col items-center justify-center w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center p-4 border-t z-0 mix-blend-difference border-black cursor-pointer transition-all hover:opacity-50"
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
          >
            <h2 className="md:text-5xl sm:text-4xl text-3xl transition-transform hover:-translate-x-2">
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
