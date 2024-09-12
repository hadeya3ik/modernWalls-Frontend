import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const projects = [
    {
      name: "Modular Kitchen",
    },
    {
      name: "Spanish Kitchen",
    },
    {
      name: "Wardrobes",
    },
    {
      name: "Media Walls",
    },
]
  
export default function ClipGallery() {
    return (
        <main >
          {
            projects.map( ({name}, i) => {
              return <Gallery name={name} key={i}/>
            })
          }
        </main>
      )
}

function Gallery({name} : {name: string}) {
  return (
    <div className="gallery h-[50vh] clip-path-polygon-0-0-0-100-100-100-100-0">
      <div className="image-container w-full h-full relative">
        
      </div>
      <motion.div className="vignette fixed top-0 right-0 overflow-hidden h-[30vw] w-[25vw]">
        <h1 className='text-5xl'>{name}</h1>
      </motion.div>
    </div>
  )
}



