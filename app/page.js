"use client";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
// import { motion } from "framer-motion";
import './globals.css';
// import Image from "next/image";



export default function Page () {
  const date = () => {
    return new Date().getFullYear()
  }


  return (
    // bg-gradient-to-l from-white via-sky-200 to-gray-100
    // h - dvh tablet: h - vh
    // hero with links to pages
    <div className=" text-gray-800 dark:text-white">
      <Navbar />
      <div className=' flex flex-col items-center justify-center relative overflow-y-hidden h-svh tablet:h-screen'>
        <div  ><h1 className='text-4xl tablet:text-5xl laptop:text-8xl font-Montserrat font-semibold mb-4 '>Welcome To Frexxie</h1></div>
        <div><p className=' tablet:text-xl laptop:text-2xl mb-4 animate-pulse font-semibold'>What are we doing today?...</p></div>
        <div className=' border-b'>
          <div>
            <div className='text-gray-800 dark:text-white'>
              <ul className=' flex flex-col gap-y-1 font-semibold tablet:text-xl  w-full'>

                {/* <div className='flex items-center hover:bg-emerald-200 gap-x-2'>
                      

                      <Link href="/"><li className=' block'>Home</li></Link>
                  </div>  */}
                <div className='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>

                  <Link href="/menu"><li className='block'>Go to through our menu</li></Link>
                </div>
                <div className='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <Link href="/placeorder"><li className='block'>Make an order</li></Link>
                </div>
                <div className='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>

                  <Link href="/contact"><li className='block'>Talk to us</li></Link>
                </div>
                <div className='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 394 80"><path fill="currentColor" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" /><path fill="currentColor" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" /></svg>

                  <Link href="/blog"><li className='block'>See our blog</li></Link>
                </div>

                <div className='flex items-center hover:bg-gray-200 dark:hover:bg-gray-800 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                  <Link href="/about"><li className='block'>Read about us</li></Link></div>



              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center text-xl font-bold mt-6 z-10'><h1>&copy; { date() } </h1> </div>
      </div>
      <div>
        {/* <Image className="img" src="/pexels-rachel-claire-5531303.jpg" fill={true} alt={'hero'} new />  */}
      </div>


    </div>
  )
}




