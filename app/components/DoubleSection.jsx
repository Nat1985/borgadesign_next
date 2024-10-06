"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function DoubleSection({ isReverse }) {
    const divRef = useRef();
    useGSAP(() => {
        gsap.from(divRef.current, {
            x: -500,
            scrollTrigger: divRef.current,
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
        });

    })
    return (
        <div ref={divRef} className='w-full flex p-8'>
            <div className='flex-1 p-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis eum magni optio minus commodi, maiores et vel eaque unde corrupti architecto aut tempore iusto sit facilis illum nihil perspiciatis.
                Dignissimos minus quibusdam aliquid atque, reprehenderit similique delectus consequatur quam cupiditate rem consequuntur illo dolore, quia ab repudiandae iste debitis dicta nostrum repellat doloribus rerum, quo accusantium sed. Fugit, illum?
                Sapiente velit cum assumenda suscipit quas numquam ea perferendis tenetur exercitationem. Quis, similique vel numquam optio ipsam reiciendis. Iusto, labore optio ducimus odit tempore ipsum exercitationem quos aliquam dolor eius!
                Voluptatum, numquam. At, commodi nihil praesentium id voluptas ex alias nisi, maxime facilis officia totam repudiandae molestias deleniti ipsa quo? Impedit aperiam, officia pariatur temporibus odit eveniet earum sint iusto!</div>
            <div className='flex-1 overflow-hidden'>
                <img src="/images/hero/1.jpg" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default DoubleSection
