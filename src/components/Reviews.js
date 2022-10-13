import { useEffect, useRef } from "react";

const Reviews = ({ reviewInfo }) => {

    const reviewRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0");
                }
            });
        });

        observer.observe(reviewRef.current);
    }, [])

    return (
        <section className="w-full flex flex-wrap items-center justify-center gap-20 my-20 opacity-0 transition-all ease-in-out duration-700 delay-500" ref={reviewRef}>
            {reviewInfo.map(review => (
                <div className=" h-60 w-80 shadow-lg flex flex-col items-center" key={review.name} >
                    <img src={review.img} className="h-20 w-20 shadow-md" alt="a shoe" />
                    <h4 className="mt-5 font-semibold" id="darkMode">{review.name}</h4>
                    <p className="p-5" id="darkMode">{review.review}</p>
                </div>
            ))}
        </section>
    )
}

export default Reviews