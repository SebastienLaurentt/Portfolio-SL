import Card from '../components/Card';
import Carousel from '../components/Carousel';
import data from '../data/projectsData'
import { SwiperSlide } from 'swiper/react';

import { MdBuild } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';


function Projects () {
    return (
    <section id="projects" className="bg-gradient-to-bl from-slate-900 to-gray-700 p-8">
        <MdBuild size={52} className="mx-auto text-rose-700" />
        <SectionHeader
            sectionTitle="Projects"
            sectionDescription="The different projects I've worked on so far "
        />
        <Carousel>
            {data.map((value) => {
                return (
                <SwiperSlide className="mb-12" key={value.id}>
                    <Card 
                    key={value.id}
                    mainImage={value.mainImage}
                    title= {value.title}
                    tags= {value.tags}
                    description= {value.description}
                    website= {value.website}
                    github= {value.github}
                    />
                </SwiperSlide>
                );
            })}
        </Carousel>
        {/* </div> */}

    </section>
    );
  }
export default Projects;