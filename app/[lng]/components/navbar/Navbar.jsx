"use client"

import React, { useEffect, useRef } from 'react'
import Header from './Header'
import Burger from './Burger'
import Menu from './Menu'
import useMainStore from '@/app/zustand/mainStore'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {
    const { isOpen } = useMainStore();
    return (
        <div className='fixed z-10 bg-white top-0 left-0 right-0 w-full flex justify-between items-center py-8 px-4'>
            <Header />
            <Burger />
            {
                isOpen &&
                <Menu />
            }
        </div>
    )
}

export default Navbar
