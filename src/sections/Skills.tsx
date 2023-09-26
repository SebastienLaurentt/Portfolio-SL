import { ImPower } from 'react-icons/im';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

import data from '../data/skillsData';
import { motion } from 'framer-motion';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';

// ANIMATION TO SKILL LISTS
const fadeInAnimationsVariants = {
    initial: {
        opacity:0,
        y:100,
    },
    animate: (id: number) => ({
        opacity:1,
        y:0,
        transition:{
            delay:0.15 * id,
        },
    }),
};

function Skills ({ gradientToBl }: { gradientToBl: boolean }) {

    // ENGLISH MODE
    const context = useContext(EnglishLanguageContext);

    if (!context) {
        throw new Error("EnglishLanguageContext is not available.");
    }

    const { englishLanguage } = context;

    return (
        <Section id ="skills"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            { englishLanguage ? 
                <SectionHeader
                    sectionTitle="Skills"
                    sectionDescription="The skills that I have developed and that I regularly use"
                >
                    <ImPower className="iconSectionHeader" />
                </SectionHeader>

            :

                <SectionHeader
                    sectionTitle="Compétences"
                    sectionDescription="Les compétences que j'ai développées et que j'utilise régulièrement"
                >
                    <ImPower className="iconSectionHeader" />
                </SectionHeader>
            }

            {/* SKILLS LIST */}
            <ul 
                className='text-center flex flex-wrap gap-8 justify-around mt-16 2xl:w-2/3 mx-auto'
            >
                {data.map((value, id) => {
                    return (
                        <motion.li 
                            className=''
                            key={id}
                            variants={fadeInAnimationsVariants}
                            initial="initial"
                            whileInView='animate'
                            viewport={{
                                once:true,
                            }}   
                            custom={id}
                        >
                            <svg viewBox="0 0 128 128" className='w-16 h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 2xl:w-48 2xl:h-48 mb-2'>
                                <g dangerouslySetInnerHTML={{ __html: value.data }} />
                            </svg>
                            <span>{value.name}</span>
                        </motion.li>
                    );
                })}
            </ul>
        </Section>
    );
  }
export default Skills;

