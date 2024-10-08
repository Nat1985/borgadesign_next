"use client"

import React, { useState, useEffect, useRef } from 'react';
import { MainButton } from '../buttons';
import { useRouter } from 'next/navigation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = ({ title, text, imagesArray, link, delay }) => {
    const [currentImage, setCurrentImage] = useState(0);
    /* const images = [
        '/images/hero/1.jpg',
        '/images/hero/2.jpg',
        '/images/hero/3.jpg'
    ]; */

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % imagesArray.length);
        }, 3000 * delay);
        return () => clearInterval(interval);
    }, []);

    // Gestisco il click del button
    // Animazioni e link alla pagina
    const mainDivRef = useRef();
    const buttonRef = useRef();
    const router = useRouter();
    const handleButtonClick = () => {
        gsap.to(buttonRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut"
        });
        gsap.to(".titles", {
            y: -1000,
            stagger: 0.5,
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

    // Animazione iniziale della hero
    useEffect(() => {
        gsap.fromTo(
            mainDivRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 2
            }
        )
    }, [])

    return (
        <div ref={mainDivRef} className="w-full relative h-screen">
            {imagesArray.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Hero Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="text-center px-16">
                    <div>
                        <h3 className='titles'>{text}</h3>
                        <h1 className="titles mb-4">{title}</h1>
                    </div>
                    <div ref={buttonRef}>
                        <MainButton text="En savoir plus sur nous" click={handleButtonClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;