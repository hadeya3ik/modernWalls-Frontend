'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import Background from '@/images/marbleShelves.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ParallaxBg() {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div
            ref={container} 
            className='relative flex items-center justify-center h-[900px] overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    );
}
