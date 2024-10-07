import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const router = useRouter();
    return (
        <div>
            <img src="/images/logo.png" alt="logo" className='h-[50px] cursor-pointer' onClick={() => router.push("/")} />
        </div>
    )
}

export default Header
