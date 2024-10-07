"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';

const ImageAnimationContainer = ({ children, from }) => {
    const divRef = useRef();
    useGSAP(() => {
        const element = divRef.current
        gsap.from(element, {
            opacity: 0,
            duration: 5,
            delay: 1,
            ease: "power2.Out"
        })
    })
    return (
        < div ref={divRef}>
            {children}
        </div >
    )

}

export default ImageAnimationContainer