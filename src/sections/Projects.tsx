import Card from '../components/Card';
import Carousel from '../components/Carousel';
import data from '../data/projectsData';
import { SwiperSlide } from 'swiper/react';

import { MdBuild } from 'react-icons/md';
import Background from "../components/Background";
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';


function Projects ( { gradientToBl }: { gradientToBl: boolean }) {
    return (
        <Background
            gradientToBl={gradientToBl}
        >
            <Section id ="projects"  
                paddingBottom={true}
            >
                <MdBuild size={52} className="mx-auto text-rose-700" />
                <SectionHeader
                    sectionTitle="Projects"
                    sectionDescription="The different projects I've worked on so far "
                />
                <div className='lg:mt-24'>
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
                </div>
            </Section>
        </Background>
    );
  }
export default Projects;