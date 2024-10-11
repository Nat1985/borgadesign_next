"use client"

import useWindowWidth from '@/app/hooks/useWindowWidth'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

function ImageCrowd({ urlImagesArray }) {
    const windowWidth = useWindowWidth();

    // creo l'array di componenti
    const [imagesArray, setImagesArray] = useState(null)
    const handleArray = () => {
        let newArray = [];
        urlImagesArray.forEach(element => {
            const newElement = {
                component: <Image src={element} width={300} height={300} layout="responsive" />,
                url: element
            }
            newArray.push(newElement)
        })
        setImagesArray(newArray)
    }
    useEffect(() => {
        if (urlImagesArray) {
            handleArray();
        }
    }, [urlImagesArray])
    useEffect(() => {
        console.log('imagesArray: ', imagesArray)
    }, [imagesArray])
    return (
        <div>
            {
                imagesArray &&
                windowWidth > 1280 &&
                <div className="w-full flex flex-col p-[2px] gap-[2px]">
                    {/*  ROW 1 */}
                    <div className="flex h-[800px] overflow-hidden gap-[2px]">
                        <div className="flex-1 flex justify-center items-center hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[0].url}>{imagesArray[0].component}</Link></div>
                        <div className="flex-1 flex flex-col gap-[2px]">
                            <div className="hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[1].url}>{imagesArray[1].component}</Link></div>
                            <div className="hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[2].url}>{imagesArray[2].component}</Link></div>
                        </div>
                    </div>
                    {/* ROW 2 */}
                    <div className="h-[400px] overflow-hidden flex gap-[2px]">
                        <div className="flex justify-center items-center hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[3].url}>{imagesArray[3].component}</Link></div>
                        <div className="flex justify-center items-center hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[4].url}>{imagesArray[4].component}</Link></div>
                    </div>
                    {/* ROW 3 */}
                    <div className="max-h-[500px] overflow-hidden flex justify-center items-center hover:opacity-50 transition-opacity duration-300"><Link href={imagesArray[5].url}>{imagesArray[5].component}</Link></div>
                </div>
            }
            {
                imagesArray &&
                windowWidth < 1280 &&
                <div className="w-full flex flex-col p-[2px] gap-[2px]">
                    <Link href={imagesArray[0].url}>{imagesArray[0].component}</Link>
                    <Link href={imagesArray[1].url}>{imagesArray[1].component}</Link>
                    <Link href={imagesArray[2].url}>{imagesArray[2].component}</Link>
                    <Link href={imagesArray[3].url}>{imagesArray[3].component}</Link>
                    <Link href={imagesArray[4].url}>{imagesArray[4].component}</Link>
                    <Link href={imagesArray[5].url}>{imagesArray[5].component}</Link>
                </div>
            }
            </div>
            )
}

            export default ImageCrowd
