"use client"

import gsap from "gsap";
import { useState, useEffect, useRef } from "react"

const SmoothModal = ({ time }) => {
    const [isVisible, setIsVisible] = useState(true);
    const divRef = useRef();
    useEffect(() => {
        gsap.to(divRef.current, {
            opacity: 0,
            duration: time / 1000
        })
        setTimeout(() => {
            setIsVisible(false)
        }, time)
    }, [])
    return (
        isVisible &&
        <div ref={divRef} className='fixed inset-0 z-10 bg-white'>
        </div>
    )
}

export default SmoothModal