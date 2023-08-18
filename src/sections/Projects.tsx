import codit from '../assets/codit.png';

function Projects () {
    return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 p-8">
        <h2>Projects</h2>
        <div className="flex flex-col bg-gray-700  rounded-lg p-4">
            <div className="flex justify-center mb-4">
                <img src={codit} alt="" className="rounded-xl hover:md:scale-[0.99]" />
            </div>
            <div className="">
                <h5>
                    Codit 
                </h5>
                <div className=" flex gap-x-2 text-cyan-400 mb-4">
                    <span>
                        Javascript
                    </span>
                    <span>
                        React
                    </span>
                    <span>
                        Tailwind
                    </span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ipsam saepe quia laborum nobis consequatur.</p>
                <div className="text-gray-300 flex gap-x-4 italic">
                    <a href="https://codit-three.vercel.app/"> View Website  </a>
                    <a href=""> View GitHub  </a>
                </div>
            </div>
        </div>



    </section>
    );
  }
export default Projects;