"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';

const TextSlideAnimationContainer = ({ children, from, delay }) => {
    const divRef = useRef();
    useGSAP(() => {
        const element = divRef.current
        gsap.from(element, {
            x: from === 'dx' ? 1500 : -1000,
            duration: 1,
            delay: delay ? delay : 0,
            ease: "power2.Out"
        });
        gsap.from(element, {
            opacity: 0,
            duration: 5,
            delay: delay ? delay : 0
        });
    })
    return (
        < div ref={divRef}>
            {children}
        </div >
    )

}

export default TextSlideAnimationContainer