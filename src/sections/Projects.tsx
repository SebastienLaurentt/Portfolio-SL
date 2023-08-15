import TitleSection from "../components/TitleSection";


function Projects () {
    return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 min-h-screen p-8">
        <TitleSection titleContent="Projects" />
        <div className="flex flex-row justify-between mt-4">
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-white flex flex-col p-2 rounded-lg">
                <span>PhD Student</span>
                <span>2017 - 2021</span>
            </button>
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-white flex flex-col p-2 rounded-lg  text-center">
                <span>Post Doc</span>
                <span>2021 - 2022</span>
            </button>
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-white flex flex-col p-2 rounded-lg ">
                <span>Web Dev</span>
                <span>2022 - 2023</span>
            </button>
        </div>
        <section className="p-4">
          <div className=" text-white w-full text-center mt-28 mb-8">
            <span className="block text-3xl"> Welcome !  </span>
            <span className=" block bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent text-4xl mb-4"> I'm Sébastien</span>
            <p className="text-lg mb-4"> A cognitive researcher who wants to use brain knowledge to build an accessible web </p>
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-md p-4 rounded-full">DOWNLOAD CV</button>
          </div>
          <img src="" alt="" className="" />
        </section>


    </section>
    );
  }
export default Projects;