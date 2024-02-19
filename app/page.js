"use client";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
// import { motion } from "framer-motion";
import './globals.css';
import Image from "next/image";
import Parallax from "./components/parallax/parallax";
import Footer from "./components/footer/footer";



export default function Page () {
  const time = () => {
    return new Date().getFullYear()
  }


  return (
    // bg-gradient-to-l from-white via-sky-200 to-gray-100
    // h - dvh tablet: h - vh
    // hero with links to pages
    <div className=" text-gray-100">
      <Navbar />
      <div className='h-[90vh] shadow-md flex flex-col items-center justify-center overflow-y-hidden '>
        <div ><h1 className='text-4xl tablet:text-5xl laptop:text-8xl font-Montserrat font-semibold mb-4'>Welcome To Frexxie</h1></div>
        <div><p className=' tablet:text-xl laptop:text-2xl mb-4 animate-pulse font-semibold'>What are we doing today?...</p></div>
        <div className=' border-b'>
          <div>
            <div className='text-white '>
              <ul className=' flex flex-col gap-y-1 font-semibold tablet:text-xl  w-full'>

                {/* <div className='flex items-center hover:bg-emerald-200 gap-x-2'>
                      

                      <Link href="/"><li className=' block'>Home</li></Link>
                  </div>  */}
                <div className='flex items-center hover:bg-gray-700 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>

                  <Link href="/menu"><li className='block'>Go to through our menu</li></Link>
                </div>
                <div className='flex items-center hover:bg-gray-700 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <Link href="/placeorder"><li className='block'>Make an order</li></Link>
                </div>
                <div className='flex items-center hover:bg-gray-700 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>

                  <Link href="/contact"><li className='block'>Talk to us</li></Link>
                </div>

                <div className='flex items-center hover:bg-gray-700 gap-x-2 p-2 rounded-sm cursor-pointer hover:transition duration-[0.3s]'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>

                  <Link href="/about"><li className='block'>Read about us</li></Link></div>



              </ul>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center text-xl font-bold mt-6 z-10'><h1>&copy; {time()} </h1> </div>
      </div>
      <div>
        <Image className="img" src="/pexels-rachel-claire-5531303.jpg" fill={true} />
      </div>
      {/* Showcase Section */}
      <div>
        <div>
          <div>

          </div>
        </div>
      </div>

      {/* Parallax Section */}
      <div className="parallax" >
        <Parallax />
      </div>
      <div className="text-gray-100 px-6 bg-gray-900 py-10">
        <div className="flex space-x-8  ">
          <div className="border-2 p-20 flex items-center justify-center"><h1>Card One</h1></div>
          <div className="border-2 p-20 flex items-center justify-center"><h1>Card Two</h1></div>
          <div className="border-2 p-20 flex items-center justify-center"><h1>Card Three</h1></div>
          <div className="border-2 p-20 flex items-center justify-center"><h1>Card Four</h1></div>
          <div className="border-2 p-20 flex items-center justify-center"><h1>Card five</h1></div>
        </div>
      </div>
      {/* Second Parallax */}
      <div className="parallax-2" >
        {/* <Parallax /> */}
      </div>
      <Footer />


    </div>
  )
}




