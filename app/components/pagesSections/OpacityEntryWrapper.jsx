"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'

function OpacityEntryWrapper({ children }) {
    const divRef = useRef();
    useGSAP(() => {
        gsap.from(divRef.current, {
            opacity: 0,
            duration: 3,
            delay: 1,
            ease: "power1.out"
        })
    })
    return (
        <div ref={divRef}>
            {children}
        </div>
    )
}

export default OpacityEntryWrapper
