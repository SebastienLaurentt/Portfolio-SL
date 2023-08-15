import carlogo from "../assets/6101007.svg"
import TitleSection from "../components/TitleSection";

function Experiences () {
    return (
    <section className="bg-gradient-to-tl from-slate-900 to-gray-700 min-h-screen p-8">
        <TitleSection titleContent="Experiences" />
        <div className="flex flex-row justify-between mt-4">
            <button className="bg-gradient-to-r from-teal-700 to-cyan-400 text-white flex flex-col p-2 rounded-lg">
                <span>PhD Student</span>
                <span>2017 - 2021</span>
            </button>
            <button className="bg-white text-black flex flex-col p-2 rounded-lg  text-center">
                <span>Post Doc</span>
                <span>2021 - 2022</span>
            </button>
            <button className="bg-white text-black flex flex-col p-2 rounded-lg ">
                <span>Web Dev</span>
                <span>2022 - 2023</span>
            </button>
        </div>
        <section className="p-4">
          <div className=" text-white w-full text-center mt-28 mb-8">
            <h2 className=" block bg-gradient-to-r from-teal-700 to-cyan-400 bg-clip-text text-transparent text-4xl mb-4">PhD Student</h2>
            <h3>Gustave Eiffel University</h3>
          </div>
          <img src={carlogo} alt="" className="" />
        </section>


    </section>
    );
  }
export default Experiences;