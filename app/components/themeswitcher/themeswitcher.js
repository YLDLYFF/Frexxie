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
  if (resolvedTheme === "dark"){
    return (
      <button onClick={()=> setTheme('light')}>Light</button>
    )
  }
  if (resolvedTheme === "light"){
    return (
      <button onClick={()=> setTheme('dark')}>dark</button>
    )
  }
}