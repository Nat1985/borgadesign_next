"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useMainStore from '@/app/zustand/mainStore'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Burger() {
    const { isOpen, setBurger } = useMainStore()
    const imageRef = useRef()

    useGSAP(() => {
        if (imageRef.current) {
            gsap.set(imageRef.current, { opacity: 1 }) // Imposta l'opacità iniziale a 1
        }
    }, [])

    useEffect(() => {
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                opacity: isOpen ? 0 : 1,
                duration: 2
            })
        }
    }, [isOpen])

    return (
        <div onClick={() => setBurger(!isOpen)} className='p-2 cursor-pointer'>
            <Image src='/icons/menu-burger.png' ref={imageRef} width={36} height={36} alt="Menu icon" />
        </div>
    )
}

export default Burger