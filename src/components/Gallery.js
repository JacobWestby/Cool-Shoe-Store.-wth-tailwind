import { useEffect, useState, useCallback } from 'react';

import shoe_1 from "../images/shoe_nr_1.jpg";
import shoe_2 from "../images/shoe_nr_2.jpg";
import shoe_3 from "../images/shoe_nr_3.jpg";
import shoe_4 from "../images/shoe_nr_4.jpg";
import shoe_5 from "../images/shoe_nr_5.jpg";
import shoe_6 from "../images/shoe_nr_6.jpg";

let i = 0;

function Gallery() {
    const images = [shoe_1, shoe_2, shoe_3, shoe_4, shoe_5, shoe_6];
    const [newImage, setNewImage] = useState(images[0]);

    const gallery = useCallback(() => {
        if (i < images.length) {
            setNewImage(images[i]);
            i += 1;
        } else if (i === images.length) {
            i = 0;
            setNewImage(images[i]);
        };

        setTimeout(gallery, 6000);
    }, []);


    useEffect(() => {
        gallery();
    }, [gallery])

    return (
        <div className="w-full mx-auto h-4/6 lg:h-5/6 bg-slate-400">
            <div className="h-full w-full transition-all ease-in-out" style={{ backgroundImage: `url("${newImage}")`, backgroundPosition: "center", }}></div>
        </div>
    )
}

export default Gallery