'use client';
import { useRef } from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from 'next/link';
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

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <main className="">
            <NavBar/>
            <Navigation/>
            <div ref={container} className="border-8">
                <div className="flex">
                    {/* First Image */}
                    <motion.div style={{ y: y1 }} className="h-[60vh] w-[50vh]">
                        <Image 
                            src={Picture1}
                            alt="image-1"
                        />
                    </motion.div>
                    
                    {/* Second Image */}
                    <motion.div style={{ y: y2 }} className="h-[60vh] w-[50vh]">
                        <Image 
                            src={Picture2}
                            alt="image-2"
                        />
                    </motion.div>
                    
                    {/* Third Image */}
                    <motion.div style={{ y: y3 }} className="h-[60vh] w-[50vh]">
                        <Image 
                            src={Picture3}
                            alt="image-3"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="h-screen"></div>
        </main>
    );
}
