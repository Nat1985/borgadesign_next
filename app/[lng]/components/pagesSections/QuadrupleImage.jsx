import Link from "next/link"

const QuadrupleImage = ({ image1, image2, image3, image4 }) => {
    return (
        <div className="post-image w-full flex flex-col md:flex-row gap-8">
            <div className="flex-1 overflow-hidden">
                <Link href={image1} ><img src={image1} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={image2} ><img src={image2} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={image3} ><img src={image3} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
            <div className="flex-1 overflow-hidden">
                <Link href={image4} ><img src={image4} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" /></Link>
            </div>
        </div>
    )
}

export default QuadrupleImage