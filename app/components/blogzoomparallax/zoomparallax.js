"use client";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import './../../globals.css'
import { useRef } from "react";

import React from 'react'

export default function ZoomParallax () {
  

  const container = useRef( null );
  const { scrollYProgress } = useScroll( {
    target: container,
    offset: [ 'start start', 'end end' ]
  } );

  const scale4 = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 4 ] );
  const scale5 = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 5 ] );
  const scale6 = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 6 ] );
  // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div >
      <div ref={ container } className="hidden tablet:block h-[300vh] relative">
        <div className="sticky top-0 h-screen">
          <div className="flex items-center justify-center w-full h-full absolute top-0">
            <motion.div style={ { scale: scale4 } } className="w-[25vw] h-[25vh] relative">
              <Image className="object-cover rounded-md shadow-lg" src="/crispy-fried-chicken-plate-with-salad-carrot.jpg" alt='food image' fill={ true } />
            </motion.div>
          </div>
          <div className=" w-full h-full absolute top-20 left-32 -z-10">
            <motion.div style={ { scale: scale5 } } className="w-[25vw] h-[25vh] relative">
              <Image className="object-cover rounded-md shadow-lg" src="/pexels-rdne-stock-project-5779896.jpg" alt='food image' fill={ true } />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


