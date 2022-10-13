import { useEffect, useState } from "react"

import shoe_1 from "../images/shoe_nr_1.jpg"
import shoe_2 from "../images/shoe_nr_2.jpg"
import shoe_3 from "../images/shoe_nr_3.jpg"
import shoe_4 from "../images/shoe_nr_4.jpg"
import shoe_5 from "../images/shoe_nr_5.jpg"
import shoe_6 from "../images/shoe_nr_6.jpg"

const Gallery = () => {
    const [images, setImages] = useState([
        shoe_1,
        shoe_2,
        shoe_3,
        shoe_4,
        shoe_5,
        shoe_6,
    ])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (images.length) {
            const timeoutId = setTimeout(() => {
                setIndex((index + 1) % images.length)
            }, 6000)

            return () => clearTimeout(timeoutId)
        }

        return () => { }
    }, [index])

    return (
        <div className="w-full mx-auto h-4/6 lg:h-5/6 bg-slate-400">
            <div className="h-full w-full transition-all ease-in-out duration-700 bg-cover" style={{ backgroundImage: `url("${images[index]}")`, backgroundPosition: "center", }}></div>
        </div>
    )
};

export default Gallery;