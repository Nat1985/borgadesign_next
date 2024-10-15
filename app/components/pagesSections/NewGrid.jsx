import DoubleImage from "./DoubleImage"
import SingleImage from "./SingleImage"
import TripleImage from "./TripleImage"

const NewGrid = ({ array }) => {
    return (
        <div>
            <DoubleImage image1={array[0]} image2={array[1]} />
            <SingleImage image={array[2]} />
            <TripleImage image1={array[3]} image2={array[4]} image3={array[5]} />
        </div>
    )
}

export default NewGrid