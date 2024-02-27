"use client";
// import picture1 from './../../public'
import Link from "next/link";
import ZoomParallax from "../components/blogzoomparallax/zoomparallax";
import Parallax from "../components/parallax/parallax";
import { useScroll, useTransform, motion } from "framer-motion";
// import Footer from "../components/footer/footer";
import './../globals.css'
import { useRef } from "react";




export default function Page () {

    return (
        <div className="">
            <div className="bg-gray-100 dark:text-gray-900">
                <div className="px-6 py-10">
                    <div>
                        <h1 className="text-2xl tablet:text-3xl laptop:text-6xl font-Montserrat font-semibold mb-4">Blog</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi, accusantium eius consequatur neque, maiores eveniet pariatur vel labore odit aliquam nostrum minus reprehenderit itaque natus quidem quos delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi, accusantium eius consequatur neque, maiores eveniet pariatur vel labore odit aliquam nostrum minus reprehenderit itaque natus quidem quos delectus?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi, accusantium eius consequatur neque, maiores eveniet pariatur vel labore odit aliquam nostrum minus reprehenderit itaque natus quidem quos delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex commodi, accusantium eius consequatur neque, maiores eveniet pariatur vel labore odit aliquam nostrum minus reprehenderit itaque natus quidem quos delectus?</p>
                    
                </div>
            </div>

            {/* Zoom Parallax component */ }
            <div >
                <ZoomParallax/>
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
