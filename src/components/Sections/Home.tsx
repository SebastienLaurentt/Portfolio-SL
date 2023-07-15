import Header from "../Header";
import headerCategory from "../../data/headerCategory";
import deskLogo from "../../assets/deskLogo.svg"


function Home () {
    return (
    <section className="bg-gradient-to-tr from-slate-900 to-gray-700 min-h-screen p-8">
        <Header headerCategory={headerCategory}/>
        <div className="ml-12 p-4 absolute top-60 left-20 text-white w-2/5">
          <span className="block text-4xl"> Welcome !  </span>
          <span className=" bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent text-5xl "> I'm Sébastien .</span>
          <p className="text-2xl mb-8 w-4/5"> A cognitive researcher who wants to use brain knowledge to build an accessible web </p>
          <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-xl m-0 bg-slate-400 p-4 rounded-full">DOWNLOAD CV</button>
        </div>
        <img src={deskLogo} alt="" className="absolute bottom-20 right-60 w-2/4" />
    </section>
    );
  }
export default Home;