"use client"

import useWindowWidth from '@/app/hooks/useWindowWidth'
import useMainStore from '@/app/zustand/mainStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { getDictionary } from '@/app/locales/getDictionary';

function Menu() {
    // Catturo params per use client (useParams)
    const params = useParams();
    const lng = params.lng || 'fr';
    const t = getDictionary(lng);

    const { setBurger, isSubOpen } = useMainStore();
    const router = useRouter();

    // QUESTI LINK VERRANO SOSTITUITI DALLA VOCE LINK TRADOTTA
    const links = [
        { label: t.Navbar.home, link: `/${lng}` },
        { label: t.Navbar.history, link: `/${lng}/histoire` },
        { label: t.Navbar.floorAndWalls, link: `/${lng}/sols-et-murs` },
        { label: t.Navbar.bathroom, link: `/${lng}/salle-de-bain` },
        { label: t.Navbar.kitchen, link: `/${lng}/cuisine` },
        { label: t.Navbar.swimmingPools, link: `/${lng}/piscines` },
        { label: t.Navbar.materialsAndFinisches, link: `/${lng}/materiaux-et-finitions` },
        { label: t.Navbar.projects, link: `/${lng}/realisations` },
        { label: t.Navbar.interiorDesign, link: `/${lng}/design-interieur` },
        { label: t.Navbar.contacts, link: `/${lng}/contacts` },
    ]
    const windowWidth = useWindowWidth();

    // Gestisco le animazioni
    const containerRef = useRef();
    const overlayRef = useRef();
    const whitePanelRef = useRef();
    const crossRef = useRef();
    const brochureRef = useRef();
    const languageRef = useRef();
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
            easy: "power2.inOut",
            duration: 0.6
        });
        // brochure
        gsap.from(brochureRef.current, {
            x: 400,
            easy: "power3.inOut",
            delay: 1,
            duration: 1
        });
        // multilingua
        gsap.from(languageRef.current, {
            y: 1000,
            easy: "power3.inOut",
            delay: 1,
            duration: 1
        });
    },)

    // Gestisco le animazioni di smontaggio componente e reindirizzamento
    const [crossClosed, setCrossClosed] = useState(false)
    const handleClick = (link) => {
        setCrossClosed(true);
        gsap.to(overlayRef.current, {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            duration: 0.7
        });
        gsap.to(".field", {
            x: 400,
            duration: 0.4,
            ease: "power3.out",
            stagger: -0.1
        });
        gsap.to(whitePanelRef.current, {
            opacity: 0,
            duration: 1,
            delay: 0.3
        });
        setTimeout(() => {
            setBurger(false)
            console.log('link: ', link)
            if (link !== 'close') {
                /* router.push(link); */
                window.location.href = link
            }
        }, 1300);
    }

    // imposto crossClosed di nuovo falso quando il componete viene smontato
    useEffect(() => {
        return () => {
            setCrossClosed(false)
        }
    }, [])

    // Imposto il cambio di lingua
    const pathname = usePathname();
    const switchLanguage = (newLang) => {
        const newPath = pathname.replace(`/${lng}`, `/${newLang}`);
        window.location.href = (newPath)
    }

    return (
        <div ref={overlayRef} className='fixed inset-0 bg-black bg-opacity-80 flex justify-end z-10'>
            {!crossClosed && <Image ref={crossRef} className='absolute top-10 right-6 z-10 cursor-pointer' src='/icons/cross.png' width={36} height={36} alt="Menu icon" onClick={() => handleClick('close')} />}
            {/* Panel */}
            <div ref={whitePanelRef} className={`absolute right-0 top-0 bottom-0 bg-[#231f20] ${windowWidth <= 768 ? 'left-0' : 'w-96'} flex flex-col justify-start items-center pt-16 pb-4`}>
                {/* Menu */}
                <ul ref={containerRef} className='text-white text-3xl text-center flex flex-col gap-4 md:gap-4'>
                    {
                        links.map((element, index) => {
                            return <li key={index} className='field font-extralight hover:text-rose-700 cursor-pointer' onClick={() => handleClick(element.link)}>{element.label}</li>
                        })
                    }
                </ul>
                <div className='flex flex-col flex-grow justify-end gap-8'>
                    {/* Scarica brochure */}
                    <div ref={brochureRef} className='w-full flex flex-col items-center'>
                        <div className='text-white mb-4'>{t.Navbar.downloadBrochure}</div>
                        <div className='flex flex-col text-3xl gap-2'>
                            <div className='overflow-hidden rounded cursor-pointer'><a href="/pdf/borga.pdf"><Image src="/images/borga.png" width={200} height={0} /></a></div>
                            <div className='overflow-hidden rounded cursor-pointerì'><a href="/pdf/magiline.pdf"><Image src="/images/magiline.png" width={200} height={0} /></a></div>
                        </div>
                    </div>
                    {/* Seleziona lingua */}
                    <div ref={languageRef} className='w-full flex flex-col items-center justify-end pb-8 gap-2'>
                        <div className='text-white'>{t.Navbar.selectLanguage}</div>
                        <div className='flex gap-2 text-3xl'>
                            <button onClick={() => switchLanguage('fr')} className={`cursor-pointer rounded p-2 ${lng === 'fr' && 'border'}`}>🇫🇷</button>
                            <button onClick={() => switchLanguage('it')} className={`cursor-pointer rounded p-2 ${lng === 'it' && 'border'}`}>🇮🇹</button>
                            <button onClick={() => switchLanguage('en')} className={`cursor-pointer rounded p-2 ${lng === 'en' && 'border'}`}>🇬🇧</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Menu
