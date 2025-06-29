import Link from "next/link";
import Contact from "../components/contact/Contact";
export default function Page () {
  return (
    <div className="m-0 p-0 overflow-x-clip">
      <div className="h-dvh tablet:h-screen  flex flex-col items-center justify-center ">
        <div className='w-full flex flex-col items-center justify-center'>
          <div>
            <h1 className='text-3xl font-semibold tablet:text-4xl laptop:text-6xl'>Speak to Us</h1>
          </div>
          <div className='text-center mt-2'>
            <p>Anything from food reviews, customer service, experiences etc...</p>
          </div>
        </div>

        {/* moving balls */ }
        {/* <div className="relative w-full dark:hidden flex items-center justify-center">
          <div className="absolute top-5 -left-30 w-[10rem] h-[10rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-lg animate-blob opacity-65 tablet:-top-36 tablet:w-[40rem] tablet:h-[40rem]"></div>
          <div className="absolute top-0 right-[2rem] w-[10rem] h-[10rem]  bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000 opacity-65 tablet:left-[30rem] tablet:-top-40 tablet:w-[40rem] tablet:h-[40rem]"></div>
          <div className="absolute top-0 left-[2rem] w-[10rem] h-[10rem]  bg-pink-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000 opacity-65  tablet:left-[44rem] tablet:-top-40 tablet:w-[40rem] tablet:h-[40rem]"></div>
        </div> */}
        {/* contact form */ }
        <Contact />


      </div>






      <div className='flex items-center gap-x-1 hover:cursor-pointer mt-20'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>


        <Link href="/"><li className='p-2'>Home</li></Link>
      </div>

    </div>
  )
}
