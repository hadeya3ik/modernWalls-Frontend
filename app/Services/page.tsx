'use client';
import { useRef } from "react";
import Image, {StaticImageData} from "next/image";
import NavBar from "@/components/NavBar";
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from "@/components/Navigation";
import Modular1 from '@/images/Kitchens/modular1.png'
import Modular2 from '@/images/Kitchens/modular2.png'
import Modular3 from '@/images/Kitchens/modular3.jpg'
import Modular4 from '@/images/Kitchens/modular4.png'
import Modular5 from '@/images/Kitchens/modular5.png'
import Modular6 from '@/images/Kitchens/modular6.png'
import Spanish2 from '@/images/Kitchens/spanish5.jpg'
import Spanish3 from '@/images/Kitchens/spanish3.png'
import Spanish5 from '@/images/Kitchens/spanish5.png'
import Office1 from '@/images/Offices/office1.png'
import Office2 from '@/images/Offices/office2.png'
import Office3 from '@/images/Offices/office3.png'
import Media1 from '@/images/Media/Media1.jpg'
import Media2 from '@/images/Media/media2.jpg'
import Media3 from '@/images/Media/media3.jpg'
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
            <>
            <div  className="gallery clip-path-polygon-0-0-0-100-100-100-100-0">
                <motion.div className="z-[0] whitespace-nowrap vignette fixed top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                    <h1 className="text-xl sm:text-3xl md:text-5xl font-ppNeueMontreal text-center text-black mix-blend-difference">
                        What we Build
                    </h1>
                </motion.div>
            <div className="w-[95%] h-[25vh]">
            </div> 
            </div>
            {
                projects.map( (project, i) => {
                return <Gallery key={i} name={project.name} images={project.images} />
                })
            }
            </>
            <div className="border-t border-black">
                <Footer/>
            </div>
        </main>
    );
}

const projects: Project[] = [
    {
      name: "Modular Kitchen",
      images: [Modular1, Modular3, Modular5],
    },
    {
      name: "Spanish Kitchen",
      images: [Spanish5, Spanish2, Spanish3],
    },
    {
      name: "Offices",
      images: [Office1, Office3, Office2],
    },
    {
      name: "Media Walls",
      images: [Media1, Media2, Media3],
    },
]



function Gallery({ name, images }: { name: string, images: StaticImageData[] }) {
    const container = useRef(null);    

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["10%", "10%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <div ref={container} className="gallery clip-path-polygon-0-0-0-100-100-100-100-0 pb-8">
            <motion.div className="z-[0] whitespace-nowrap vignette fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
            <motion.h1
                className="text-xl sm:text-3xl md:text-3xl font-ppNeueMontreal text-center mix-blend-difference"
                initial={{ color: "#ffffff" }} 
                animate={{ color: "#000000" }} 
                transition={{ duration: 1 }} 
            >
                {name}
            </motion.h1>
            </motion.div>
            <div className="flex flex-wrap justify-center sm:justify-between px-4"> 
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    style={{ y: index === 0 ? y1 : index === 1 ? y2 : y3 }}
                    className=" h-[40vh] w-[40vh]  z-[50]  " 
                >
                    <Image className="z-50" src={image} alt={`image-${index + 1}`} />
                </motion.div>
            ))}
        </div> 
        </div>
    );
}
