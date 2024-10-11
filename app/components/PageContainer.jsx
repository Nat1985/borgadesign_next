import React from 'react'

function PageContainer({ children, isDark }) {
    return (
        <div className={`flex flex-col p-8 ${isDark && 'bg-[#231f20] text-white'}`}>
            {children}
        </div>
    )
}

export default PageContainer
