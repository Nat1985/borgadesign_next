import React from 'react'
import Image from 'next/image'

function SubMenu() {
    return (
        <div className='absolute right-0 md:right-96 top-0 bottom-0 left-0 md:left-auto z-20 md:w-[300px] bg-white'>
            <Image src="/icons/back.png" width={36} height={36} />
        </div>
    )
}

export default SubMenu
