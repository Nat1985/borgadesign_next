"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'

function SlideEntryWrapper({ children, fromDx }) {
    const divRef = useRef();
    useGSAP(() => {
        gsap.from(divRef.current, {
            x: fromDx ? 1500 : -1500,
            opacity: 0,
            duration: 1,
            ease: "power1.out"
        })
    })
    return (
        <div ref={divRef}>
            {children}
        </div>
    )
}

export default SlideEntryWrapper
