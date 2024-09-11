"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/Services" },
  { title: "Contact", href: "/Contact" },
];

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

const fadeAnimation = {
  initial: { opacity: 0},
  open: { opacity: 1, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.7 } },
  closed: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <div className="md:p-12 sm:p-8 p-4 absolute top-0 right-0 z-[40] ">
      <div className="flex">
        <div
          onClick={() => setIsActive(!isActive)}
          className={`z-[50] flex items-center justify-center h-[35px] w-[35px] cursor-pointer rounded-full transition-colors ease-in-out ${
            isActive ? "duration-1000 bg-gray-200" : "duration-[2000ms] bg-white"
          }`}
        >
          <div
            className={`relative before:absolute w-[22.5px] before:h-[1px] before:top-[-4px] after:h-[1px] after:top-[4px] before:w-full before:bg-black before:transition-all before:duration-[0.5s] before:cubic-bezier-[0.76,0,0.24,1] after:absolute after:w-full after:bg-black after:transition-all after:duration-[0.5s] after:cubic-bezier-[0.76,0,0.24,1] ${
              isActive ? "before:rotate-[45deg] before:top-[4px] after:rotate-[-45deg] after:top-[4px]" : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={background}
            initial="initial"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-gray-200 no-doc-scroll z-40"
          >
            <motion.div 
            variants={fadeAnimation}
            initial="initial"
            animate="open"
            exit="closed"
            className="md:p-12 sm:p-8 p-4 flex flex-col h-full justify-between">
              <h1 className="text-3xl z-[100] mix-blend-difference">BRAND</h1>
              <div className="w-full flex items-center justify-between">
                <div className="flex gap-12 sm:flex-row flex-col sm:text-md text-sm">
                  <div className="font-ppNeueMontreal">
                    <p>1234567-89</p>
                    <p>xxx Address, City</p>
                    <p>Province, Country</p>
                  </div>
                  <motion.div className="font-ppNeueMontreal flex flex-col">
                    <Link href="/" className="cursor-pointer">Instagram</Link>
                    <Link href="/" className="cursor-pointer">Tiktok</Link>
                    <Link href="/" className="cursor-pointer">Facebook</Link>
                  </motion.div>
                </div>
                <div className="flex flex-col gap-4">
                  {links.map((link, index) => (
                    <Link 
                      href={link.href}
                      key={index}
                      className="font-ppNeueMontreal flex flex-col gap-4 self-end sm:text-4xl text-3xl cursor-pointer"
                      onClick={() => setSelectedLink({ isActive: true, index })}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              <h1 className="md:text-5xl sm:text-4xl text-3xl mix-blend-difference self-end items-end">
                companyname@ex.com
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
