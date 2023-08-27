import Card from '../components/Card';
import Carousel from '../components/Carousel';
import data from '../data/projectsData'
import { SwiperSlide } from 'swiper/react';

import { MdBuild } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';


function Projects () {
    return (
        <Section id ="projects"  
            gradientToBl={true}
            paddingBottom={true}
        >
        <MdBuild size={52} className="mx-auto text-rose-700" />
        <SectionHeader
            sectionTitle="Projects"
            sectionDescription="The different projects I've worked on so far "
        />
        <div className='lg: mt-24'>
            <Carousel>
                {data.map((value) => {
                    return (
                    <SwiperSlide className="mb-12 mx-auto" key={value.id}>
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
        </div>
    </Section>
    );
  }
export default Projects;