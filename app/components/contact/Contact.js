"use client";
import { useState } from "react";
export default function Contact () {
  const [ userName, setUserName ] = useState( '' );
  const [ userEmail, setUserEmail ] = useState( '' );
  const [ userMessge, setMessage ] = useState( '' );


  const changeName = ( event ) => {
    setUserName( event.target.value );
  }
  const changeEmail = ( event ) => {
    setUserEmail( event.target.value );
  }
  const changeMessage = ( event ) => {
    setMessage( event.target.value );
  }
  const submitHandler = ( event ) => {
    event.preventDefault();


    const dataCollect = {
      userName: userName,
      userEmail: userEmail,
      userMessge: userMessge,
    }

    console.log( dataCollect );
    setUserEmail( '' );
    setUserName( '' );
    setMessage( '' );

  }

  return (
    <div className=''>

      <form onSubmit={ submitHandler } className='mt-8'>
        <div className='flex flex-col space-y-8'>
          <div className=' relative'>
            <input
              className='peer h-10 px-3 bg-transparent border-b-2 focus:outline-none focus:border-rose-600 dark:placeholder:text-gray-200 placeholder:text-gray-900 caret-red-600 placeholder-transparent peer-focus:placeholder-transparent'
              id='name'
              type="text"
              onChange={ changeName }
              placeholder=''
              value={ userName }
              required
            />
            <label htmlFor="name" className='
            absolute
            px-3
            left-0
            -top-3.5
            text-gray-600
             text-sm transition-all
             peer-placeholder-shown:text-base
             dark:peer-placeholder-shown:text-gray-200
             peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm
             peer-focus:text-gray-600'>Enter your name</label>
          </div>


          <div className='relative'>
            <input
              className='peer h-10 px-3 bg-transparent border-b-2 focus:outline-none focus:border-rose-600 dark:placeholder:text-gray-200 placeholder:text-gray-900 caret-red-600 placeholder-transparent peer-focus:placeholder-transparent'
              id='email'
              type="email"
              onChange={ changeEmail }
              placeholder=''
              value={ userEmail }
              required
            />
            <label htmlFor="email" className='
            absolute
            px-3
            left-0
            -top-3.5
            text-gray-600
             text-sm transition-all
             peer-placeholder-shown:text-base
             dark:peer-placeholder-shown:text-gray-200
             peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm
             peer-focus:text-gray-600'>Email</label>
          </div>


          <div className='flex flex-col relative'>
            <textarea placeholder='' className='  peer h-10  bg-transparent border-b-2 focus:outline-none focus:border-rose-600 dark:placeholder:text-gray-200 placeholder:text-gray-900 caret-red-600 placeholder-transparent peer-focus:placeholder-transparent' name="message" id="message" onChange={ changeMessage } value={ userMessge } cols="" rows="10" ></textarea>
            <label htmlFor="message" className='
            absolute
            px-3
            left-0
            -top-3.5
            text-gray-600
             text-sm transition-all
             peer-placeholder-shown:text-base
             dark:peer-placeholder-shown:text-gray-200
             peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm
             peer-focus:text-gray-600'>Your Message...</label>

          </div>


          <div className='flex items-center justify-end'>
            <div className='relative'>
              <div className='absolute -inset-1 rounded-md blur dark:bg-pink-600 bg-neutral-600'></div>
              <button
                className='relative px-3 py-2 rotate-6 rounded-md bg-black text-white'
                type='submit'>Send</button>
            </div>
          </div>
        </div>
      </form>
      {/* <div>
        <div>
          <h1>{ userName }</h1>
        </div>
      </div> */}
    </div>

  )
};





