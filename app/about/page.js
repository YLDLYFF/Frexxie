import Link from "next/link";

export default function Page() {
  return (
    <div className='px-6 h-dvh'>
      <div className='tablet:grid grid-cols-2 gap-4'>
        <div>
          <div className='flex items-center justify-center mt-4 shadow-md border-b'>
            <h1 className='text-2xl font-Montserrat font-semibold'>Hi... We are Frexxie</h1>
          </div>
          <div className='mt-2'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dignissimos qui quaerat saepe cumque nesciunt officia aspernatur culpa harum, at assumenda, cum quidem? Ipsa minima placeat quis excepturi porro blanditiis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ut nemo fugit in optio atque cum ipsum laboriosam dolor! Asperiores dignissimos aliquam quidem maiores ipsam molestias itaque. Eveniet, nobis odio.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center mt-8 tablet:mt-4 shadow-md border-b'>
            <h1 className='text-2xl font-Montserrat font-semibold'>How we came about?</h1>
          </div>
          <div className='mt-2'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dignissimos qui quaerat saepe cumque nesciunt officia aspernatur culpa harum, at assumenda, cum quidem? Ipsa minima placeat quis excepturi porro blanditiis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nesciunt fugit cupiditate nulla aspernatur blanditiis consectetur nam. Temporibus non incidunt optio perferendis cupiditate! Dignissimos a asperiores est accusantium hic ut.</p>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center mt-8 tablet:mt-4 shadow-md border-b'>
            <h1 className='text-2xl font-Montserrat font-semibold'>Why choose us?</h1>
          </div>
          <div className='mt-2'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dignissimos qui quaerat saepe cumque nesciunt officia aspernatur culpa harum, at assumenda, cum quidem? Ipsa minima placeat quis excepturi porro blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, dignissimos qui quaerat saepe cumque nesciunt officia?</p>
          </div>
        </div>
      
      </div>
      




      <div className='flex items-center gap-x-1 hover:cursor-pointer mt-10'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
     

                      <Link href="/"><li className='p-2'>Home</li></Link>
                  </div>
    </div>
  )
}
