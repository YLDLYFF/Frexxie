"use client";

import { useEffect } from 'react';

function SmoothScrolling ({ children }) {
  
    if (!isClient) return null;

    return <Lenis children={children} />;
}

export default SmoothScrolling;
