import React from "react";
import { RollLink } from "./RollLink";
import Link from "next/link";

const Footer : React.FC = () => {
    return (
      <div className="w-full h-[60vh]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 100%)" }}>
        <div className='md:p-12 sm:p-8 p-4 fixed h-[60vh] w-full bottom-0 flex flex-col justify-between'>
            <div className="flex md:flex-row flex-col gap-2 justify-between">
                <div className='font-ppNeueMontreal flex flex-col gap-2 md:text-3xl sm:text-2xl text-xl cursor-pointer'>
                        <RollLink href="/" >{"Home"}</RollLink>
                        <RollLink href="/Services" >{"Services"}</RollLink>
                        <RollLink href="/Contact" >{"Contact"}</RollLink>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-12 justify-end'>
                        {/* <div className='font-ppNeueMontreal sm:text-md text-sm'>
                            <p>1234567-89</p>
                            <p>xxx Address, City</p>
                            <p>Province, Country</p>
                        </div> */}
                        <div className='font-ppNeueMontreal flex flex-col cursor-pointer text-right'>
                            <RollLink  href="https://www.instagram.com/modernwalls.pk/" >
                                {"Instagram"}
                            </RollLink>
                            <RollLink href="https://www.tiktok.com/@modernwall.pk" >
                                {"Tiktok"}
                            </RollLink>
                        </div>
                    </div>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl mix-blend-difference self-end'>
                        modernwalls@gmail.com
                    </h1>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='md:text-5xl sm:text-4xl text-3xl mix-blend-difference'>
                    MODERN WALLS
                </h1>
                <p className='font-ppNeueMontreal'>Privacy Policy</p>
            </div>
        </div>
      </div>
    );
}

export default Footer