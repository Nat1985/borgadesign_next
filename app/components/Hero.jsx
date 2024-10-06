"use client"

import React, { useState, useEffect } from 'react';
import { MainButton } from '../components/buttons';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/images/hero/1.jpg',
        '/images/hero/2.jpg',
        '/images/hero/3.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full relative h-screen">
            {images.map((img, index) => (
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
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Une expérience séculaire dans le monde du travail du Marbre, du Granit et des Pierres Naturelles.</h1>
                    <MainButton text="En savoir plus sur nous" />
                </div>
            </div>
        </div>
    );
};

export default Hero;