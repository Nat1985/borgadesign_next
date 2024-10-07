const OneColumPage = ({ children, isDark }) => {
    return (
        <div className={`w-full px-8 md:px-0 flex flex-col gap-4 mt-[116px] ${isDark && 'bg-[#231f20] text-white'}`}>
            {children}
        </div>
    )
}

export default OneColumPage