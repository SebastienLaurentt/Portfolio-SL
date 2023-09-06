import Card from '../components/Card';
import Carousel from '../components/Carousel';
import data from '../data/projectsData'
import { SwiperSlide } from 'swiper/react';

import { MdBuild } from 'react-icons/md';
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';


function Projects ({ gradientToBl }: { gradientToBl: boolean }) {

    const context = useContext(EnglishLanguageContext);

    const { englishLanguage } = context;

    const dataLanguage = englishLanguage ? data.english : data.french;

    return (
        <Section id ="projects"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            <MdBuild size={52} className="mx-auto text-rose-700" />

            { englishLanguage ? 
                <SectionHeader
                    sectionTitle="Projects"
                    sectionDescription="The different projects I've worked on so far "
                />

            :

                <SectionHeader
                    sectionTitle="Projets"
                    sectionDescription="Les différentes projets sur lesquels j'ai travaillé jusqu'à présent"
                />
            }


            <div className='lg:mt-24'>
                <Carousel>
                    {dataLanguage.map((value) => {
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
    );
  }
export default Projects;