import React from 'react'

function FullModal({ children }) {
    return (
        <div className='fixed inset-0 z-10 bg-white flex justify-center items-center'>
            {children}
        </div>
    )
}

export default FullModal
