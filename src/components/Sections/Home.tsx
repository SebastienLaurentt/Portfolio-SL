import Header from "../Header";

import deskLogo from "../../assets/deskLogo.svg"


function Home () {
    return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-700 min-h-screen p-8">
        <Header />
        <section className="p-4">
          <div className=" text-white w-full text-center mt-28 mb-8">
            <span className="block text-3xl"> Welcome !  </span>
            <span className=" block bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent text-4xl mb-4"> I'm Sébastien</span>
            <p className="text-lg mb-4"> A cognitive researcher who wants to use brain knowledge to build an accessible web </p>
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-md  bg-slate-400 p-4 rounded-full">DOWNLOAD CV</button>
          </div>
          <img src={deskLogo} alt="" className="" />
        </section>
    </section>
    );
  }
export default Home;