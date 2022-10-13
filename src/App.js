import { useEffect, useRef, useState } from "react";

import Gallery from "./components/Gallery.js";
import Reviews from "./components/Reviews.js";
import WhythisShoe from "./components/WhythisShoe.js";

import shoe_1 from "./images/shoe_nr_1.jpg";
import shoe_2 from "./images/shoe_nr_2.jpg";
import shoe_4 from "./images/shoe_nr_4.jpg";
import { CgDarkMode } from "react-icons/cg";

function App() {
  const [reviewInfo, setReviewInfo] = useState([
    {
      img: shoe_4,
      name: "Jessica Messica",
      review: "I love this shoe, it's so comfortable and it looks great!",
    },
    {
      img: shoe_4,
      name: "Gabe Lastnamerson",
      review: "Omg this is the best thing I've ever bought!",
    },
    {
      img: shoe_2,
      name: "Uriel Notanickname",
      review: "My feet have never been happier!",
    },
    {
      img: shoe_1,
      name: "Urusla Lovesashoe",
      review: "I can't belive i got my hands on a pair of these badboys!",
    },
    {
      img: shoe_2,
      name: "Gamer Playsalot",
      review: "These are great for gaming, I can play for hours!",
    },
  ]);
  const [darkMode, setDarkmode] = useState(false);

  const bodyRef = useRef(null);
  const navRef = useRef(null);



  useEffect(() => {
    const textRef = document.querySelectorAll("#darkMode")

    const changeMode = () => {
      if (darkMode) {
        bodyRef.current.classList.add("bg-gray-900");
        navRef.current.classList.add("bg-gray-700");
        textRef.forEach(text => text.style.color = "white");
      } else {
        bodyRef.current.classList.remove("bg-gray-900");
        navRef.current.classList.remove("bg-gray-700");
        textRef.forEach(text => text.style.color = "black");
      }
    }

    changeMode()
  }, [darkMode])

  return (
    <div className="overflow-hidden" ref={bodyRef}>
      <header className="h-screen mb-10">
        <nav className=" flex justify-between px-10 py-5 mb-5 shadow-md lg:px-40" ref={navRef}>
          <h1 className=" text-lg font-bold" id="darkMode">Shoe</h1>
          <ul className="flex items-center">
            <li onClick={() => darkMode === false ? setDarkmode(true) : setDarkmode(false)} className="ml-4" id="darkMode"><CgDarkMode className="w-[1.5rem] h-[1.5rem]" /></li>
          </ul>
        </nav>

        <div className=" mb-10 shadow-lg max-w-6xl mx-auto h-5/6 lg:h-5/6">
          <Gallery />
          <h2 className=" px-5 text-lg font-bold" id="darkMode">A Shoe</h2>
          <p className=" px-5 text-gray-500">A shoe can have so many different shapes, here are a few shoes that totally real custommers have bought from our made up compay</p>
        </div>
      </header>
      <main className="px-8 py-5 flex flex-col max-w-4xl mx-auto mt-10">
        <h3 className=" self-center mb-8 font-bold" id="darkMode">Why this shoe</h3>
        <WhythisShoe />
        <Reviews reviewInfo={reviewInfo} />
      </main>

      <footer className="h-80 w-full">
        <div className="flex flex-col items-center justify-evenly h-full px-8 bg-slate-400">
          <h3 className=" text-center text-white">Get an email when items are back in stock!</h3>
          <form action="submit" className="text-white h-3/4 flex flex-col justify-evenly w-full max-w-md ">
            <lable htmlFor="name">Name</lable>
            <input className="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 text-gray-800" type="text" id="Name" />

            <lable htmlFor="Email">Email</lable>
            <input className="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 text-gray-800" type="text" id="Email" />

            <button className="hover:text-gray-500" type="button">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
