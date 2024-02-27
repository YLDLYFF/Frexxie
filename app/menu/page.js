"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import Link from "next/link";

export default function Page () {
  const ref = useRef( null );
  const { scrollYProgress } = useScroll( {
    target: ref,
    offset: [ "0 1", "1.33 1" ],
  } );
  const scaleProgress = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 1 ] );
  const opacityProgress = useTransform( scrollYProgress, [ 0, 1 ], [ 1, 1 ] );


  return (
    <div className=' '>
      <div>
        <div className='m-0 p-0 mt-1 '>
          <div className='flex flex-col items-center justify-center w-full tablet:h-screen tablet:flex-row'>
            <div className='border-r-2 w-full tablet:w-1/2 tablet:h-screen bg-gray-200 dark:bg-zinc-900 p-20 flex items-center justify-center '>
              <h1 className='text-xl tablet:text-3xl laptop:text-5xl '>Breakfast</h1>

            </div>

            <div className="tablet:w-1/2 px-6 py-4 tablet:py-0 tablet:px-32 ">
              <h1 className='text-2xl tablet:text-3xl laptop:text-5xl font-semibold ' >Breakfast</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. pariatur quo. itaque doloribus. Quibusdam odio, incidunt fuga aut blanditiis laborum  placeat!</p>

              <div className='flex items-center justify-end'>
                <Link href="/menu/goodmorning"> <button className='bg-cyan-600 mt-6 p-3 rounded-md text-white'>Check it out</button></Link>
              </div>

            </div>
          </div>

          <motion.div
            ref={ ref }
            style={ {
              scale: scaleProgress,
              opacity: opacityProgress,
            } }
            transition={ { delay: 0.6 } }
          >

            <div className='flex flex-col-reverse items-center justify-center w-full tablet:h-screen tablet:flex-row'>
              <div className="tablet:w-1/2 px-6 py-4 tablet:px-32 tablet:py-0">
                <h1 className='text-2xl tablet:text-3xl laptop:text-5xl font-semibold' >Lunch</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. pariatur quo. itaque doloribus. Quibusdam odio, incidunt fuga aut blanditiis laborum  placeat!</p>

                <div className='flex items-center justify-end'>
                  <button className='bg-cyan-600 mt-6 p-3 rounded-md text-white'>Check it out</button>
                </div>

              </div>
              <div className='border-l-2 w-full tablet:w-1/2 tablet:h-screen bg-gray-200 dark:bg-zinc-900 p-20 flex items-center justify-center '>
                <h1 className='text-xl tablet:text-3xl laptop:text-5xl'>Lunch</h1>

              </div>

            </div>
            <div className='flex flex-col items-center justify-center w-full tablet:h-screen tablet:flex-row'>
              <div className='border-r-2 w-full tablet:w-1/2 tablet:h-screen bg-gray-200 dark:bg-zinc-900 p-20 flex items-center justify-center '>
                <h1 className='text-xl tablet:text-3xl laptop:text-5xl'>Dinner</h1>

              </div>
              <div className="tablet:w-1/2 px-6 py-4  tablet:py-0 tablet:px-32 ">
                <h1 className='text-2xl tablet:text-3xl laptop:text-5xl font-semibold' >Dinner</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. pariatur quo. itaque doloribus. Quibusdam odio, incidunt fuga aut blanditiis laborum  placeat!</p>

                <div className='flex items-center justify-end'>
                  <button className='bg-cyan-600 mt-6 p-3 rounded-md text-white'>Check it out</button>
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>



      <div className='mt-8 flex items-center w-40  gap-x-2 hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

        <Link href="/"><li className=' block'>Back To Home</li></Link>
      </div>
    </div>
  )
}

