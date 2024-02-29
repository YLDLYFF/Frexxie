"use client";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import './../../globals.css';
import picture1 from './../../../public/pexels-cottonbro-studio-5901029.jpg';
import picture2 from './../../../public/pexels-fauxels-3184183.jpg';
import picture3 from './../../../public/pexels-kadir-avşar-15010935.jpg';
import picture4 from './../../../public/pexels-oleksandr-p-15665989.jpg';
import picture5 from './../../../public/pexels-horizon-content-3763816.jpg';
import picture6 from './../../../public/pexels-furkanfdemir-8286784.jpg';
import picture7 from './../../../public/pexels-rdne-stock-project-5779895.jpg';
import { useRef } from "react";
import styles from './../../blog/styles.module.scss';
import React from 'react'

export default function ZoomParallax () {


  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);


  const pictures = [
    {
      src: picture3,
      scale: scale4

    },
    {
      src: picture2,
      scale: scale5

    },
    {
      src: picture1,
      scale: scale6

    },
    {
      src: picture7,
      scale: scale5

    },
    {
      src: picture4,
      scale: scale6

    },
    {
      src: picture5,
      scale: scale8

    },
    {
      src: picture6,
      scale: scale9

    },
  ]
  return (
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          
          {
            pictures.map(({ src, scale }, index) => {
              return <motion.div style={{ scale: scale }} key={index} className={styles.el}>
                <div  className={styles.imageContainer}>
                  <Image
                    src={src}
                    fill={true}
                    alt="image"
                  />
                </div>

              </motion.div>
            })
          }
          
          
        </div>
      </div>
  )
}


