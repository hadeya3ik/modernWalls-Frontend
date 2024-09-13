'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic1 from '@/images/pexels1.jpg';
import pic2 from '@/images/pexels2.jpg';
import pic3 from '@/images/pexels3.jpg';
import pic4 from '@/images/pexels6.jpg';
import pic5 from '@/images/pexels10.jpg';
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Non lectus eget non mus facilisis ipsum nunc faucibus. Tempus fusce placerat accumsan nec primis orci egestas facilisis. Enim neque ullamcorper maximus magna non. Sapien leo felis risus; nisi ullamcorper iaculis. Adipiscing fusce tristique magna morbi montes blandit vehicula. Porttitor tortor praesent vehicula commodo platea.
                </p>
                <p className='sm:max-w-md max-w-lg self-end'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
