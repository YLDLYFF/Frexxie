"use client";
// import picture1 from './../../public'
import Link from "next/link";
import Image from "next/image";
import Parallax from "../components/parallax/parallax";
import { useScroll,useTransform, motion } from "framer-motion";
// import Footer from "../components/footer/footer";
import './../globals.css'
import { useRef } from "react";




export default function Page () {
    const container = useRef( null );
    const { scrollYProgress } = useScroll( {
        target: container,
        offset: [ 'start start', 'end end' ]
    } );
    
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);


    return (
        <div className="">
            <div ref={container} className="h-[300vh] relative">
                <div className="sticky top-0 h-screen">
                    <div className="flex items-center justify-center w-full h-full absolute top-0">
                        <motion.div style={{ scale: scale4 }} className="w-[25vw] h-[25vh] relative">
                            <Image className="object-cover" src="/crispy-fried-chicken-plate-with-salad-carrot.jpg" alt='food image' fill={ true } />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Showcase Section */ }
            <div className="p-8 bg-neutral-800 ">
                <div>
                    <div>
                        <h1 className="show text-center animate-bounce text-white text-nowrap whitespace-nowrap tablet:text-5xl font-Montserrat ">Everything From Breakfast to Breakfast</h1>
                    </div>
                </div>
            </div>

            {/* Parallax Section */ }
            <div className="parallax" >
                <Parallax />
            </div>
            <div className="text-gray-900 px-6 bg-gradient-radial from-sky-400 via-slate-2000 to-sky-300 py-10">
                <div className="flex space-x-8  ">
                    <div className="border-2 p-20 flex items-center justify-center"><h1>Card One</h1></div>
                    <div className="border-2 p-20 flex items-center justify-center"><h1>Card Two</h1></div>
                    <div className="border-2 p-20 flex items-center justify-center"><h1>Card Three</h1></div>
                    <div className="border-2 p-20 flex items-center justify-center"><h1>Card Four</h1></div>
                    <div className="border-2 p-20 flex items-center justify-center"><h1>Card five</h1></div>
                </div>
            </div>
            {/* Second Parallax */ }
            <div className="parallax-2" >
                {/* <Parallax /> */ }
            </div>
        </div>
    )
}
