"use client";
import Link from "next/link";
import { useState } from "react";


import ThemeSwitch from '/themeswitcher/themeswitcher';


export default function Contactnav () {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true)
  }
  const closeClickHandler = () => {
    setIsOpen(false)
  }


  return (
    <div className='px-3'>
      <div className='  flex items-center justify-between p-2 shadow-sm sticky'>
        <div>
          <h1 className='text-xl tablet:text-2xl laptop:text-4xl text-gray-800 border-b-2 border-neutral-300 font-Caveat'>Frexxie Foods</h1>
        </div>
        <div className='text-gray-700 '>
          <ul className=' mobile:hidden tablet:flex gap-x-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/placeorder"><li>Order</li></Link>
            <Link href='/menu'>Menu</Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/about"><li>About Us</li></Link>
            <ThemeSwitch />
          </ul>
        </div>
        {isOpen == false ?
          <div className='cursor-pointer tablet:hidden ' >
            <svg onClick={clickHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div> :
          <div className='cursor-pointer tablet:hidden transition duration-[1.1s] ' >
            <svg onClick={closeClickHandler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>


          </div>
        }
      </div>



      {isOpen == false ?
        <div className='absolute w-60 h-full bg-white  text-gray-700 p-4 z-10 -translate-x-[-9999px] transition duration-[0.9s] opacity-0'>
          <div>
            <div className='text-gray-700 '>
              <ul className=' flex flex-col gap-y-3  '>
                <Link href="/"><li>Home</li></Link>
                <li>Order</li>
                <Link href="/contact"><li>Contacts</li></Link>
                <Link href="/about"><li>About Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
        :
        <div className='overflow-x-hidden border absolute w-[100%] h-full bg-white z-10 text-gray-700 translate-x-[140px] transition duration-[0.4s] backdrop-blur-lg shadow-sm tablet:hidden'>
          <div>

            <div className='text-gray-700 '>
              <ul onClick={closeClickHandler} className=' flex flex-col gap-y-3 font-Poppins text-xl w-full'>

                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>


                  <Link href="/"><li className=' block'>Home</li></Link>
                </div>
                {/* <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>

                   <Link href="/menu"><li className='block'>Menu</li></Link> 
                  </div> */}
                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>


                  <Link href="/placeorder"><li className='block'>Order</li></Link>
                </div>
                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>

                  <Link href="/contact"><li className='block'>Contacts</li></Link>
                </div>

                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>

                  <Link href="/about"><li className='block'>About Us</li></Link></div>



              </ul>
            </div>
          </div>
        </div>}
    </div>
  )
}

