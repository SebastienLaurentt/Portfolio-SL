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

    // ENGLISH MODE
    const context = useContext(EnglishLanguageContext);

    if (!context) {
        throw new Error("EnglishLanguageContext is not available.");
    }

    const { englishLanguage } = context;

    const dataLanguage = englishLanguage ? data.english : data.french;

    return (
        <Section id ="projects"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            { englishLanguage ? 
                <SectionHeader
                    sectionTitle="Projects"
                    sectionDescription="The different projects I've worked on so far "
                >
                    <MdBuild className="iconSectionHeader" />
                </SectionHeader>

            :

                <SectionHeader
                    sectionTitle="Projets"
                    sectionDescription="Les différents projets sur lesquels j'ai travaillé jusqu'à présent"
                >
                    <MdBuild className="iconSectionHeader" />
                </SectionHeader>
            }

            {/* PROJECTS CONTENT (IN CARROUSEL) */}
            <div className='xl:mt-24'>
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