import TitleSection from "../components/TitleSection";


function Projects () {
    return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 min-h-screen p-8">
        <TitleSection titleContent="Projects" />
        <div className="flex flex-row justify-center mt-4">
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-white flex flex-col p-2 rounded-lg">
                <span>Codit</span>
                <span>2023 - </span>
            </button>
        </div>



    </section>
    );
  }
export default Projects;