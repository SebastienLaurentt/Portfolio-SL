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
            <ImPower className="mx-auto text-rose-700 w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24" />

            { englishLanguage ? 
                <SectionHeader
                    sectionTitle="Skills"
                    sectionDescription="The skills that I have developed and that I regularly use"
                />

            :

                <SectionHeader
                    sectionTitle="Compétences"
                    sectionDescription="Les compétences que j'ai développées et que j'utilise régulièrement"
                />
            }

            {/* SKILLS LIST */}
            <ul 
                className='text-center flex flex-wrap gap-y-8 justify-around mt-16 2xl:w-2/3 mx-auto'
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
                            <svg viewBox="0 0 128 128" className='w-32 h-32 mb-2'>
                                <g dangerouslySetInnerHTML={{ __html: value.data }} />
                            </svg>
                            <span className='languageName'>{value.name}</span>
                        </motion.li>
                    );
                })}
            </ul>
        </Section>
    );
  }
export default Skills;

