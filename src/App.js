
function App() {
  return (
    <div className="">
      <header className="h-screen">
        <nav className=" flex justify-between px-10 py-5 mb-5 shadow-md lg:px-40">
          <h1 className=" text-lg font-bold">Shoe</h1>
          <ul className="flex ">
            <li><a href="#">more</a></li>
            <li className="ml-4">dark</li>
          </ul>
        </nav>

        <div className=" mb-10 shadow-lg max-w-6xl mx-auto h-5/6 lg:h-5/6">
          <div className="w-full mx-auto h-4/6 bg-slate-400">
            {/* img */}
          </div>
          <h2 className=" px-5 text-lg font-bold">a Shoe</h2>
          <p className=" px-5 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi similique modi placeat esse quo illo assumenda sed ea magni.</p>
        </div>
      </header>
      <main className="px-8 py-5 flex flex-col max-w-4xl mx-auto">
        <h3 className=" self-center mb-8 font-bold">Why this shoe</h3>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5 text-end">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, </p>

        <section className="w-full flex flex-wrap items-center justify-center gap-20 my-20">
          <div className=" h-60 w-80 shadow-lg flex flex-col items-center ">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-80 shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-80 shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-80 shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
        </section>
      </main>

      <footer className="h-80 w-full">
        <div className="flex flex-col items-center justify-evenly h-full px-8 bg-slate-400">
          <h3 className=" text-center text-white">Get an email when item is back in stock!</h3>
          <form action="submit" className="text-white h-3/4 flex flex-col justify-evenly w-full max-w-md ">
            <lable for="name">Name</lable>
            <input className="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 text-gray-800" type="text" id="Name" />

            <lable for="Email">Email</lable>
            <input className="px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-gray-500 text-gray-800" type="text" id="Email" />

            <button className="hover:text-gray-500" type="button">Submit</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
