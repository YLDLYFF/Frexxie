"use client";
import Link from "next/link";
import { useState } from "react";


import ThemeSwitch from "../themeswitcher/themeswitcher";


export default function Contactnav () {
  const [ isOpen, setIsOpen ] = useState( false );

  const clickHandler = () => {
    setIsOpen( true )

  }
  const closeClickHandler = () => {
    setIsOpen( false )
  }


  return (
    <div className='p-2 shadow-md  w-full bg-homeDefaultNav dark:bg-homeDefaultDark '>
      <div className='  flex items-center justify-between '>
        <div>
          <h1 className='text-xl tablet:text-2xl laptop:text-4xl text-gray-800 dark:text-gray-100 border-b-2 border-neutral-300 font-Caveat'>Frexxie Foods</h1>
        </div>
        <div className='text-gray-700 dark:text-gray-100'>
          <ul className=' mobile:hidden tablet:flex gap-x-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/placeorder"><li>Order</li></Link>
            <Link href='/menu'>Menu</Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/about"><li>About Us</li></Link>
            <ThemeSwitch />
          </ul>
        </div>
        { isOpen == false ?
          <div className='cursor-pointer tablet:hidden ' >
            <svg onClick={ clickHandler } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div> :
          <div className='cursor-pointer tablet:hidden transition duration-[1.1s] ' >
            <svg onClick={ closeClickHandler } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>


          </div>
        }
      </div>



      { isOpen == false ?
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
        <div className='overflow-x-hidden border-l  fixed w-[100%] h-dvh bg-white  text-gray-700 dark:bg-homeDefaultDark translate-x-[140px] transition duration-[0.4s] backdrop-blur-lg shadow-sm tablet:hidden scroll-m-0 '>
          <div>

            <div className='text-gray-700 '>
              <ul onClick={ closeClickHandler } className=' flex flex-col gap-y-3 font-Poppins text-xl w-full'>

                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
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
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>


                  <Link href="/placeorder"><li className='block'>Order</li></Link>
                </div>
                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" /><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" /></svg>

                  <Link href="/blog"><li className='block'>Blog</li></Link>
                </div>

                <div className='flex items-center hover:bg-emerald-200 gap-x-2 cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>

                  <Link href="/about"><li className='block'>About Us</li></Link></div>



              </ul>
            </div>
          </div>
        </div> }
    </div>
  )
}

