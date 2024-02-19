import Link from "next/link";

export default function Page () {
  return (
    <div className='mt-1 px-6 h-screen'>
      <div>
        <div className='grid grid-cols-1 tablet:grid-cols-2 gap-8 laptop:grid col-span-2 '>
          <div className='flex flex-col'>
            <Link href='/menu/goodmorning'><div className='border bg-sky-300 rounded-md p-20 flex items-center justify-center'>
              <h1>Breakfast</h1>

            </div>
            </Link>
            <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. pariatur quo.</p></div>
          </div>
          <div className='border bg-fuchsia-300 rounded-md p-20 flex items-center justify-center'>Lunch</div>
          <div className='border bg-teal-300 rounded-md p-20 flex items-center justify-center'>Dinner</div>
          <div className='border bg-stone-300 rounded-md p-20 flex items-center justify-center'>Desert</div>
        </div>
      </div>



      <div className='mt-8 flex items-center w-40  gap-x-2 hover:cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

        <Link href="/"><li className=' block'>Back To Home</li></Link>
      </div>
    </div>
  )
}

