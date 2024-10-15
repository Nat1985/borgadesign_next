import Link from "next/link"

const TripleImage = ({ image1, image2, image3 }) => {
    return (
        <div className="post-image w-full flex flex-col md:flex-row gap-[1px] bg-white p-[1px]">
            <div className="flex-1 overflow-hidden">
                <Link href={image1}><img src={image1} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={image2}><img src={image2} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={image3}><img src={image3} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
        </div>
    )
}

export default TripleImage