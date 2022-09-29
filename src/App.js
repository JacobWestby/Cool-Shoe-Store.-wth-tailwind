
function App() {
  return (
    <div className="">
      <header className=" h-screen">
        <nav className=" flex justify-between px-10 py-5 mb-5 shadow-md">
          <h1 className=" text-lg font-bold">Shoe</h1>
          <ul className="flex ">
            <li><a href="#">more</a></li>
            <li className="ml-4">dark</li>
          </ul>
        </nav>

        <div className="px-8 py-5 mb-10 shadow-lg max-w-5xl mx-auto h-5/6">
          <div className="w-full mx-auto h-5/6 bg-slate-400">
            {/* img */}
          </div>
          <h2 className="text-lg font-bold">a Shoe</h2>
          <p className=" text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi similique modi placeat esse quo illo assumenda sed ea magni.</p>
        </div>
      </header>
      <main className="px-8 py-5 flex flex-col max-w-4xl mx-auto">
        <h3 className=" self-center mb-8 font-bold">Why this shoe</h3>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5 text-end">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <p className=" mb-20 text-gray-500 border-b-2 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, </p>

        <section className="w-full flex flex-col items-center gap-40 my-20">
          <div className=" h-60 w-full max-w-sm shadow-lg flex flex-col items-center ">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-full max-w-sm shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-full max-w-sm shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
          <div className=" h-60 w-full max-w-sm shadow-lg flex flex-col items-center">
            <div className="h-20 w-20 bg-cyan-400">
              {/* img */}
            </div>
            <h4 className="mt-5 font-semibold">Name Nameerson</h4>
            <p className="p-5">Really good shoe, my feet are inlove</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
