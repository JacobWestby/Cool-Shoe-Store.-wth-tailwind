import { useEffect, useState, useRef } from "react";

const WhythisShoe = () => {
    const domRef1 = useRef();
    const domRef2 = useRef();
    const domRef3 = useRef();

    useEffect(() => {
        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("translate-x-[-10rem]", "opacity-0")
                }
            });
        });
        observer1.observe(domRef1.current);

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("translate-x-[12rem]", "opacity-0")
                }
            });
        });
        observer2.observe(domRef2.current);

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("translate-x-[-10rem]", "opacity-0")
                }
            });
        });
        observer3.observe(domRef3.current);
    }, []);

    return (
        <div>
            <p className=" mb-20 text-gray-500 border-b-2 pb-5 text-slide-left translate-x-[-10rem] opacity-0 transition-all ease-in-out duration-700 delay-500" ref={domRef1}>This shoe has support in all the right places </p>
            <p className=" mb-20 text-gray-500 border-b-2 pb-5 text-slide-right text-end translate-x-[12rem] opacity-0 transition-all ease-in-out duration-700 delay-500" ref={domRef2}>The colors of this premium footwear is unmatched</p>
            <p className=" mb-20 text-gray-500 border-b-2 pb-5 text-slide-lef translate-x-[-10rem] opacity-0 transition-all ease-in-out duration-700 delay-500" ref={domRef3}>It's just plain better than other shoes</p>
        </div>
    )
};

export default WhythisShoe;
