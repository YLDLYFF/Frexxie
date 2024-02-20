import Link from "next/link";
import ContactForm from "../components/contact/contact";
export default function Page () {
  return (
    <div className="">
      <div className=" min-h-[60dvh] flex items-center justify-center tablet:min-h-screen">
        {/* moving balls */}
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute top-5 -left-30 w-[10rem] h-[10rem] bg-purple-300 rounded-full mix-blend-multiply filter blur-lg animate-blob opacity-65 tablet:-top-36 tablet:w-[20rem] tablet:h-[20rem]"></div>
          <div className="absolute top-0 right-[2rem] w-[10rem] h-[10rem]  bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-2000 opacity-65 tablet:left-[30rem] tablet:-top-40 tablet:w-[20rem] tablet:h-[20rem]"></div>
          <div className="absolute top-0 left-[2rem] w-[10rem] h-[10rem]  bg-pink-300 rounded-full mix-blend-multiply filter blur-lg animate-blob animation-delay-4000 opacity-65  tablet:left-[44rem] tablet:-top-40 tablet:w-[20rem] tablet:h-[20rem]"></div>
        </div>
        {/* contact form */ }
        <ContactForm/>
        
      </div>






      <div className='flex items-center gap-x-1 hover:cursor-pointer mt-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>


        <Link href="/"><li className='p-2'>Home</li></Link>
      </div>

    </div>
  )
}
