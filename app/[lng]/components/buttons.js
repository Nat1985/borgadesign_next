export const MainButton = ({ text, click }) => {
    return <button className='border border-rose-700 py-2 px-4 rounded bg-white bg-opacity-10 hover:bg-opacity-20' onClick={click}>{text}</button>
}