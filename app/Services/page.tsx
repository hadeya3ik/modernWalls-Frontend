'use client';
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Picture1 from '@/images/pexels10.jpg';
import Picture2 from '@/images/pexels11.jpg';
import Picture3 from '@/images/pexels13.jpg';

const word = "with framer-motion";

export default function Page() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: Picture1,
            y: 0
        },
        {
            src: Picture2,
            y: useTransform(scrollYProgress, [0, 1], [0, -250])
        },
        {
            src: Picture3,
            y: useTransform(scrollYProgress, [0, 1], [0, -50])
        }
    ];

    return (
        <main>
        <div ref={container} className="mt-[10vh] min-h-[100vh]">
            <div className="">
                <div>
                    <p className="mt-2 text-[3vw] text-black uppercase">
                        {
                            word.split("").map((letter, i) => {
                                const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25]);
                                return <motion.span key={i} style={{ top: y }} className="relative">{letter}</motion.span>;
                            })
                        }
                    </p>
                </div>
            </div>

            <div className="flex justify-center w-full relative mt-[5vh]">
                {
                    images.map(({ src, y }, i) => (
                        <motion.div key={i} style={{ y }} className={`absolute ${i === 0 ? 'h-[60vh] w-[50vh] z-10' : i === 1 ? 'left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-20' : 'left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-30'}`}>
                            <Image 
                                src={src}
                                alt={`image-${i}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))
                }
            </div>
        </div>
        <div className="h-screen"> 

        </div>
        </main>
    );
}
