"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch () {
  const [ mounted, setMounted ] = useState( false );
  const { setTheme, resolvedTheme } = useTheme();

  useEffect( () => setMounted( true ), [] )

  if ( !mounted ) return (
    <div>
      <h1>Dark</h1>
    </div>

  )
  if ( resolvedTheme === "dark" ) {
    return (
      <button onClick={ () => setTheme( 'light' ) } className='dark:text-white font-Poppins font-semibold'>Light</button>
    )
  }
  if ( resolvedTheme === "light" ) {
    return (
      <button onClick={ () => setTheme( 'dark' ) } className='text-gray-800 font-Poppins font-semibold'>dark</button>
    )
  }
}