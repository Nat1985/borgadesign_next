const SingleImage = ({ image }) => {
    return (
        <div className="post-image w-full gap-[1px] bg-white p-[1px] overflow-hidden">
            <img src={image} className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300" />
        </div>
    )
}

export default SingleImage