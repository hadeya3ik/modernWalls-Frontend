'use client'
import React, { useRef } from 'react';
import Picture7 from '@/images/WoodLivingWall.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navigation from './Navigation';

function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const width = useTransform(scrollYProgress, [0, 1], ['65%', '100%']);

    return ( <main>
            <Navigation/>
            <div ref={container} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="relative top-0 left-0 flex flex-col items-center justify-center w-full h-full ">
                    {/* <div className='md:p-12 sm:p-8 p-4 md:text-5xl sm:text-4xl text-3xl  font-ppNeueMontreal'>
                        Crafting Spaces, Creating Experiences.
                    </div> */}
                        <motion.div
                            style={{ width }}
                            className="relative h-[50vh] sm:h-[90vh] overflow-hidden"
                        >
                            <Image
                                src={Picture7}
                                fill
                                alt="image"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
