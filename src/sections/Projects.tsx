import Card from '../components/Card';

import mainImage from "../assets/codit.png";

function Projects () {
    return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 p-8">
        <h2>Projects</h2>
        <Card 
        mainImage={mainImage}
        />
    </section>
    );
  }
export default Projects;