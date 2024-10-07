"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import useMainStore from '@/app/zustand/mainStore';
import { useRouter } from 'next/navigation';

function SubMenu({ hasToClose, setSubHasToClose, handleClick }) {
    const { isOpen, isSubOpen, setSubMenu } = useMainStore();
    const divRef = useRef();

    // Sublinks
    const subLinks = [
        {
            label: 'Borga design',
            link: "/borga-design"
        },
        {
            label: 'Histoire',
            link: "/histoire"
        },
        {
            label: 'Finitions',
            link: "/finitions"
        },
        {
            label: 'Services',
            link: "/services"
        },
        {
            label: 'La production',
            link: "/production"
        },
        {
            label: 'Où nous travaillons',
            link: "/travaillons"
        },
        {
            label: 'Showroom Sanremo',
            link: "/showroom-sanremo"
        }
    ]

    // Animazione di entrata
    useGSAP(() => {
        gsap.from(divRef.current, {
            y: -1000,
            opacity: 0,
            duration: 0.5
        })
    })

    // Animazione di uscita (smontaggio componente)
    const router = useRouter();
    const handleSubClick = ({ link, fromOut }) => {
        if(link !== 'close') {
            handleClick(link)
        }
        if (fromOut) {
            gsap.to(divRef.current, {
                opacity: 0,
                duration: 1,
                delay: 0.3
            })
        } else if (link === 'close' && !fromOut) {
            gsap.to(divRef.current, {
                y: -1000,
                opacity: 0,
                ease: "power3.inOut",
                duration: 0.5
            })
        }
        const time = fromOut ? 500 : 1300
        setTimeout
            (() => {
                setSubMenu(false)
            }, time)
    }

    // Gestisco la chiusura del submenu nel caso si chiuda il menu principale
    useEffect(() => {
        if (hasToClose) {
            handleSubClick({ link: 'close', fromOut: true });
            setSubHasToClose(false)
        }
    }, [hasToClose])

    return (
        <div ref={divRef} className='absolute right-0 md:right-96 top-0 bottom-0 left-0 md:left-auto z-20 md:w-[300px] bg-white flex flex-col items-center pt-16'>
            <Image src="/icons/back.png" width={36} height={36} onClick={() => handleSubClick({ link: 'close', fromOut: false })} className='cursor-pointer' alt="entreprise" />
            <ul className='mt-16 text-[#231f20] text-2xl text-center flex flex-col gap-8 md:gap-4'>
                {
                    subLinks.map((element, index) => {
                        return <li key={index} className='field font-extralight hover:text-rose-700 cursor-pointer' onClick={() => handleSubClick({ link: element.link, fromOut: true })}>{element.label}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default SubMenu
