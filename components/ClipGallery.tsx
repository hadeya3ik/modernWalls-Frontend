import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

const projects = [
    {
      name: "TV ROOM",
      handle: "tv_wall"
    },
    {
      name: "SOFA LOUNGE",
      handle: "sofa_lounge"
    },
    {
      name: "STONE WALL",
      handle: "stone_wall"
    },
]
  
export default function ClipGallery() {
    return (
        <main >
          {
            projects.map( ({handle}, i) => {
              return <Gallery handle={handle} key={i}/>
            })
          }
        </main>
      )
}

// function Gallery({handle} : {handle: string}) {
//   return (
//     <div className="gallery h-[120vh] clip-path-polygon-0-0-0-100-100-100-100-0">
//       <div className="image-container w-full h-full relative">
//         <Image
//           src={`/images/${handle}/background.jpg`}
//           alt="image"
//           fill
//           className="object-cover"
//         />
//       </div>
//       <motion.div className="vignette fixed top-0 right-0 overflow-hidden h-[30vw] w-[25vw]">
//         <Image
//           src={`/images/${handle}/1.jpg`}
//           alt="image"
//           fill
//           className="object-cover"
//         />
//       </motion.div>
//     </div>
//   )
// }

function Gallery({handle} : {handle: string}) {
  return (
    <div className="gallery h-[50vh] clip-path-polygon-0-0-0-100-100-100-100-0">
      <div className="image-container w-full h-full relative">
        <Image
          src={`/images/${handle}/background.jpg`}
          alt="image"
          fill
          className="object-cover"
        />
      </div>
      <motion.div className="vignette fixed top-0 right-0 overflow-hidden h-[30vw] w-[25vw]">
        <h1 className='text-5xl'>{handle}</h1>
      </motion.div>
    </div>
  )
}



