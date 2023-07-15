import Header from "../Header";
import headerCategory from "../../data/headerCategory";
import TypeWriterText from "../TypeWriter";

function Home () {
    return (
    <section className="bg-red-400 min-h-screen">
        <Header headerCategory={headerCategory}/>
        <div className="">
          <h1>Hello, i'm <span>Sébastien </span></h1>
          <TypeWriterText/>
          <button>Download CV</button>
        </div>
    </section>
    );
  }
export default Home