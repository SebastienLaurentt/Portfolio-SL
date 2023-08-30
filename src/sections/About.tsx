import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

import { BsPersonCircle } from 'react-icons/bs';


function About ({ gradientToBl }: { gradientToBl: boolean }) {
    return (
        <Section id ="about"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            <BsPersonCircle size={52} className="mx-auto text-rose-700" />
            <SectionHeader
                sectionTitle="About me"
                sectionDescription="A small introduction about me"
            />
            <div className="mt-12 lg:mt-16 lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:w-4/5 ">
                <div className="lg:w-1/3">
                    <div
                        className={`bg-cover bg-center bg-no-repeat w-32 md:w-40 lg:w-60 h-32 md:h-40 lg:h-60 rounded-full mx-auto `}
                        style={{ backgroundImage: `url(/static/img/PhotoPerso.png)` }}
                    /> 
                </div>

                <div className="p-4 md:p-8 text-center mt-8 lg:w-2/3">
                    <p className="">
                        Holder of a <strong className='text-emerald-500'>Ph.D. in Cognitive Sciences</strong>, my passion for innovation has led me to shape a unique professional trajectory. My journey began with an <strong className='text-emerald-500'>innovative thesis</strong>, followed by a position as a research associate in the field of <strong className='text-emerald-500'>cognitive sciences</strong>, which provided me with a solid understanding of the <strong className='text-emerald-500'>human brain</strong>.
                    </p>

                    <p className="">
                        Guided by my curiosity for the <strong className='text-emerald-500'>digital world</strong> and driven by the desire for a more practical role, I underwent training in <strong className='text-emerald-500'>web development</strong>. Applying my knowledge of human brain mechanisms, whether through <strong className='text-emerald-500'>accessibility or acceptability</strong>, to the web design process, paves the way for optimizing <strong className='text-emerald-500'>user experience</strong>. 
                    </p>

                    <p className="">
                        My ambition is to create services that are both <strong className='text-emerald-500'>ergonomic and innovative</strong>, through a thoughtful <strong className='text-emerald-500'>fusion</strong> of science and digital art.
                    </p>
                </div>
            </div>

        </Section>
    );
  }
export default About;