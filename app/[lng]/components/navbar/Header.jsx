import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function Header() {
    const params = useParams();
    const lng = params.lng || 'fr';
    return (
        <div>
            <img src="/images/logo.png" alt="logo" className='h-[50px] cursor-pointer' onClick={() => window.location.href = `/${lng}`} />
        </div>
    )
}

export default Header
