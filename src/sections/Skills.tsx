import { ImPower } from 'react-icons/im';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

import data from '../data/skillsData';
import { motion } from 'framer-motion';

const fadeInAnimationsVariants = {
    initial: {
        opacity:0,
        y:100,
    },
    animate: {
        opacity:1,
        y:0,
        transition:{
            delay:0.05
        }
    },
};

function Skills ({ gradientToBl }: { gradientToBl: boolean }) {
    return (
        <Section id ="skills"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            <ImPower size={52} className="mx-auto text-rose-700" />
            <SectionHeader
                sectionTitle="Skills"
                sectionDescription="The skills that I have developed and that I regularly use"
            />
            <motion.ul 
                className='text-center flex flex-wrap gap-y-8 justify-around mt-16'
                variants={fadeInAnimationsVariants}
                initial="initial"
                whileInView='animate'
                viewport={{
                    once:true,
                }}
            >
                {data.map((value) => {
                    return (
                        <li className=''>
                            <svg viewBox="0 0 128 128" className='w-32 h-32 mb-2'>
                                <g dangerouslySetInnerHTML={{ __html: value.data }} />
                            </svg>
                            <span className='languageName'>{value.name}</span>
                        </li>
                    );
                })}
            </motion.ul>
        </Section>
    );
  }
export default Skills;

