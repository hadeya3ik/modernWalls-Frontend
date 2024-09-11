'use client';
import { useRef } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion';
import Picture1 from '@/images/pexels10.jpg';
import Picture2 from '@/images/pexels11.jpg';
import Picture3 from '@/images/pexels13.jpg';
import Navigation from "@/components/Navigation";

export default function Page() {
    
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const images = [
        {
            src: Picture1,
            y: useTransform(scrollYProgress, [0, 1], [0, 250])
        },
        {
            src: Picture2,
            y: useTransform(scrollYProgress, [0, 1], [0, 100])
        },
        {
            src: Picture3,
            y: useTransform(scrollYProgress, [0, 1], [0, -100])
        }
    ];

    return (
        <main className="">
            <NavBar/>
            <Navigation/>
            <div ref={container} className="border-8">
                <div className="flex"> {
                        images.map(({ src, y }, i) => (
                            <motion.div key={i} style={{ y }} className={`h-[60vh] w-[50vh] `}>
                                <Image 
                                    src={src}
                                    alt={`image-${i}`}
                                />
                            </motion.div>
                        ))}
                </div>
            </div>
        <div className="h-screen"> </div>
        </main>
    );
}
