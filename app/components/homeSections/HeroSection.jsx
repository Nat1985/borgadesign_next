"use client"

import React, { useState, useEffect, useRef } from 'react';
import { MainButton } from '../buttons';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

const HeroSection = ({ title, text, image, link, delay, buttonText }) => {

    // Gestisco il click del button
    // Animazioni e link alla pagina
    const mainDivRef = useRef();
    const titleRef = useRef();
    const textRef = useRef();
    const buttonRef = useRef();
    const router = useRouter();
    const handleButtonClick = () => {
        gsap.to(buttonRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
        });
        gsap.to(titleRef.current, {
            x: 1000,
            duration: 1,
            ease: "back.inOut"
        });
        gsap.to(textRef.current, {
            x: 1000,
            duration: 1,
            delay: 0.2,
            ease: "back.inOut"
        });
        gsap.to(mainDivRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            ease: "power1.inOut"
        });
        setTimeout(() => {
            router.push(link)
        }, 1000)
    }

    return (
        <div ref={mainDivRef} className="w-full relative h-screen">
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Image
                        src={image}
                        alt='Hero Image'
                        layout="fill"  // Rende l'immagine responsiva, occupa tutto lo spazio del contenitore
                        objectFit="cover"  // Assicura che l'immagine mantenga il suo rapporto d'aspetto
                        lazyBoundary="100px"  // Inizia a caricare l'immagine quando si trova a 300px dalla viewport
                    />
                </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white">
                <div className="text-center px-16">
                    <div>
                        <h3 ref={textRef}>{text}</h3>
                        <h1 ref={titleRef} className="title mb-4">{title}</h1>
                    </div>
                    <div ref={buttonRef}>
                        <MainButton text={buttonText} click={handleButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;