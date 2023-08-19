import Card from '../components/Card';
import Carousel from '../components/Carousel';
import data from '../data/projectsData'
import { SwiperSlide } from 'swiper/react';


function Projects () {
    return (
    <section className="bg-gradient-to-bl from-slate-900 to-gray-700 p-8">
        <h2>Projects</h2>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 reveal'> */}
        <Carousel>
            {data.map((value) => {
                return (
                <SwiperSlide className="" key={value.id}>
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