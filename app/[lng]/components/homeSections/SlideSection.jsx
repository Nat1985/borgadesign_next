"use client"

import React, { useState, useEffect, useRef } from 'react';
import { MainButton } from '../buttons';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import useWindowWidth from '../../../hooks/useWindowWidth.js';

const SlideSection = ({ title, text, imagesArray, link, delay, buttonText }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % imagesArray.length);
        }, 3000 * delay);
        return () => clearInterval(interval);
    }, []);

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

    const windowWidth = useWindowWidth();

    return (
        <div ref={mainDivRef} className="w-full relative h-screen">
            {imagesArray.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Hero Image ${index + 1}`}
                        layout="fill"  // Rende l'immagine responsiva, occupa tutto lo spazio del contenitore
                        objectFit="cover"  // Assicura che l'immagine mantenga il suo rapporto d'aspetto
                        priority={index === 0}  // Carica in modo prioritario la prima immagine
                    />
                </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
                <div className="text-center">
                    {
                        windowWidth <= 640 &&
                        <div className='flex flex-col items-center'>
                            <h4 className="max-w-[300px]" ref={textRef}>{text}</h4>
                            <h2 ref={titleRef} className="title mb-4">{title}</h2>
                        </div>
                    }
                    {
                        windowWidth > 640 &&
                        <div>
                            <h3 ref={textRef}>{text}</h3>
                            <h1 ref={titleRef} className="title mb-4">{title}</h1>
                        </div>
                    }
                </div>
                <div ref={buttonRef}>
                    <MainButton text={buttonText} click={handleButtonClick} />
                </div>
            </div>
        </div>
    );
};

export default SlideSection;