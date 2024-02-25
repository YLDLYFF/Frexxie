"use client";
import React, { Component } from 'react'
import Image from 'next/image';
export default class ContactForm extends Component {
  render () {
    return (
      <div className="absolute top-16 tablet:relative flex-none font-Poppins tablet:w-full px-6 bg-sky-50 bg-opacity-5 tablet:h-screen">
        <div className='flex flex-col tablet:flex-row '>

          <div className='flex flex-col'>
            <div className="px-6 py-4 tablet:rounded-tl-md laptop:text-3xl bg-cyan-300 text-gray-50 font-semibold">What's up?...</div>
            <div className="border-2 px-6 py-8 tablet:rounded-bl-md bg-sky-100 shadow-md ">
              <form className="flex flex-col space-y-6 " action="">
                <div className='flex flex-col'>
                  <label htmlFor="name">Name</label>
                  <input className='border-b-2 bg-transparent border-gray-600' type="text" id="name" />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="email">Email</label>
                  <input className='border-b-2 bg-transparent border-gray-600' type="email" id='email' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="message">Message</label>
                  <textarea className='border-b-2 bg-transparent border-gray-600' id="message" />
                </div>
              </form>

            </div>
          </div>
          <div className='image w-full p-10 laptop:p-28  rounded-b-md tablet:rounded-r-md shadow-md'>
            <div className='flex flex-col items-center justify-center text-gray-50'>
            
              <h1 className='text-2xl tablet:text-3xl laptop:text-7xl font-Caveat'>Frexxie Foods</h1>
              <p className='font-Poppins'>Lorem ipsum dolor sit amet elit. Eligendi, officia excepturi. Illum distinctio distinctio!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




