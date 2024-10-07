"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from 'react';

const TextSerialSildeAnimationContainer = ({ children, from, delay }) => {
    const divRef = useRef();
    useGSAP(() => {
        gsap.from('.serial', {
            x: from === 'dx' ? 1500 : -1000,
            duration: 1,
            delay: delay ? delay : 0,
            stagger: 0.3,
            easy: "power2.Out"
        });
        gsap.from('.serial', {
            opacity: 0,
            duration: 5,
            delay: delay ? delay : 0,
            stagger: 0.3,
        });
    })
    return (
        < div>
            {children}
        </div >
    )

}

export default TextSerialSildeAnimationContainer