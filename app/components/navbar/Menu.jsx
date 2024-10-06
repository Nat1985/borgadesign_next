"use client"

import useWindowWidth from '@/app/hooks/useWindowWidth'
import useMainStore from '@/app/zustand/mainStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SubMenu from './SubMenu';

function Menu() {
    const { setBurger, setSubMenu, isSubOpen } = useMainStore();
    const router = useRouter();

    const links = [
        {
            label: 'Accueil',
            link: '/'
        },
        {
            label: 'Entreprise',
            link: '/entreprise'
        },
        {
            label: 'Réalisations',
            link: '/réalisations'
        },
        {
            label: 'Matériaux',
            link: '/matériaux'
        },
        {
            label: 'Contacts',
            link: '/contacts'
        },
        {
            label: 'Rejoignez-nous',
            link: '/rejoignez-nous'
        },

    ]
    const windowWidth = useWindowWidth();

    // Gestisco le animazioni
    const containerRef = useRef();
    const overlayRef = useRef();
    const whitePanelRef = useRef();
    const crossRef = useRef();
    useGSAP(() => {
        // Overlay
        gsap.from(overlayRef.current, {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            duration: 1
        })
        // White panel
        gsap.from(whitePanelRef.current, {
            x: 400,
            duration: 0.6
        });
        // Menu field
        gsap.from(".field", {
            x: 400,
            opacity: 0,
            stagger: 0.1,
            easy: "power2.out",
            duration: 0.6
        })
    },)

    // Gestisco le animazioni di smontaggio componente e reindirizzamento
    const [crossClosed, setCrossClosed] = useState(false)
    const [subHasToClose, setSubHasToClose] = useState(false) // Questo serve per inviare il bit che chiude il submenu
    const handleClosing = (link) => {
        console.log({ link })
        if (link === 'close') {
            setSubHasToClose(true)
        }
        if (link === '/entreprise') {
            setSubMenu(true)
        } else {
            setCrossClosed(true);
            gsap.to(overlayRef.current, {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                duration: 0.7
            });
            gsap.to(".field", {
                x: 400,
                duration: 0.4,
                stagger: -0.1
            });
            gsap.to(whitePanelRef.current, {
                opacity: 0,
                duration: 1,
                delay: 0.3
            });
            setTimeout(() => {
                setBurger(false)
                link !== 'close' && router.push(link.toString())
            }, 1300);
        }
    }

    // imposto crossClosed di nuovo falso quando il componete viene smontato
    useEffect(() => {
        return () => {
            setCrossClosed(false)
        }
    }, [])

    return (
        <div ref={overlayRef} className='fixed inset-0 bg-black bg-opacity-80 flex justify-end z-10'>
            {!crossClosed && <Image ref={crossRef} className='absolute top-10 right-6 z-10 cursor-pointer' src='/icons/cross.png' width={36} height={36} alt="Menu icon" onClick={() => handleClosing('close')} />}
            {
                isSubOpen &&
                <SubMenu hasToClose={subHasToClose} setSubHasToClose={setSubHasToClose} />
            }
            <div ref={whitePanelRef} className={`absolute right-0 top-0 bottom-0 bg-[#231f20] flex flex-col justify-center md:justify-start items-center ${windowWidth <= 768 ? 'left-0' : 'w-96'}`}>
                <ul ref={containerRef} className='md:mt-[200px] text-white text-4xl text-center flex flex-col gap-8 md:gap-4'>
                    {
                        links.map((element, index) => {
                            return <li key={index} className='field font-extralight hover:text-rose-700 cursor-pointer' onClick={() => handleClosing(element.link)}>{element.label}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Menu
