'use client';
import { useRef } from "react";
import Image, {StaticImageData} from "next/image";
import NavBar from "@/components/NavBar";
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Picture1 from '@/images/pexels10.jpg';
import Picture2 from '@/images/pexels11.jpg';
import Picture3 from '@/images/pexels13.jpg';
import Footer from "@/components/Footer";
type Project = {
    name: string;
    images: StaticImageData[]; 
};

export default function Page() {
    return (
        <main className="">
            <NavBar/>
            <Navigation/>
            {
                projects.map( (project, i) => {
                return <Gallery key={i} name={project.name} images={project.images} />
                })
            }
            <div className="border-t border-black">
                <Footer/>
            </div>
        </main>
    );
}

const projects: Project[] = [
    {
      name: "Modular Kitchen",
      images: [Picture1, Picture2, Picture3],
    },
    {
      name: "Spanish Kitchen",
      images: [Picture2, Picture1, Picture3],
    },
    {
      name: "Wardrobes",
      images: [Picture3, Picture1, Picture2],
    },
    {
      name: "Media Walls",
      images: [Picture1, Picture3, Picture2],
    },
]

function Gallery({ name, images }: { name: string, images: StaticImageData[] }) {
    const container = useRef(null);    

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <div ref={container} className="gallery clip-path-polygon-0-0-0-100-100-100-100-0">
            <motion.div className="whitespace-nowrap vignette fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                <h1 className="text-5xl font-ppNeueMontreal text-center">{name}</h1>
            </motion.div>
            <div className="flex flex-wrap justify-center sm:justify-between ">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
                        className="h-[60vh] w-[50vh]"
                    >
                        <Image src={image} alt={`image-${index + 1}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
