import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

import { BsPersonCircle } from 'react-icons/bs';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';


function About ({ gradientToBl }: { gradientToBl: boolean }) {

    // ENGLISH MODE
    const context = useContext(EnglishLanguageContext);

    if (!context) {
        throw new Error("EnglishLanguageContext is not available.");
    }

    const { englishLanguage } = context;

    return (
        <Section id ="about"  
            gradientToBl={gradientToBl}
            paddingBottom={true}
        >
            { englishLanguage ? 
                <SectionHeader
                    sectionTitle="About me"
                    sectionDescription="A small introduction about me"
                >
                    <BsPersonCircle  className="iconSectionHeader" />
                </SectionHeader>

                :

                <SectionHeader
                    sectionTitle="Qui suis je ?"
                    sectionDescription="Une brève introduction me concernant"
                >
                    <BsPersonCircle  className="iconSectionHeader" />
                </SectionHeader>
            }
            {/* ABOUT CONTENT */}
            <div className="mt-12 lg:mt-16 lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:w-4/5 2xl:w-2/3 ">
                {/* ABOUT PICTURE */}
                <div className="lg:w-1/3">
                    <div
                        className={`bg-cover bg-center bg-no-repeat w-32 md:w-40 lg:w-60 2xl:w-80 h-32 md:h-40 lg:h-60 2xl:h-80 rounded-full mx-auto `}
                        style={{ backgroundImage: `url(/static/img/PhotoPerso.webp)` }}
                    /> 
                </div>

                {/* ABOUT DESCRIPTION */}
                { 
                    englishLanguage ? 
                        
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

                    :

                    <div className="p-4 md:p-8 text-center mt-8 lg:w-2/3">
                        <p className="">
                            Titulaire d'un <strong className='text-emerald-500'>doctorat en sciences cognitives</strong>, ma passion pour l'innovation m'a conduit à façonner un parcours professionnel unique. Mon voyage a commencé par une <strong className='text-emerald-500'>thèse innovante</strong>, suivie d'un poste de chercheur dans le domaine des <strong className='text-emerald-500'>sciences cognitives</strong>, ce qui m'a permis d'acquérir une solide compréhension du <strong className='text-emerald-500'>cerveau humain</strong>.
                        </p>

                        <p className="">
                            Guidé par ma curiosité pour le <strong className='text-emerald-500'>monde numérique</strong> et animé par le désir d'un rôle plus pratique, j'ai suivi une formation en <strong className='text-emerald-500'>développement web</strong>. Appliquer mes connaissances des mécanismes du cerveau humain, que ce soit en matière d'<strong className='text-emerald-500'>accessibilité</strong> ou d'<strong className='text-emerald-500'>acceptabilité</strong>, au processus de conception web ouvre la voie à l'optimisation de l'<strong className='text-emerald-500'>expérience utilisateur</strong>.
                        </p>

                        <p className="">
                            Mon ambition est de créer des services à la fois <strong className='text-emerald-500'>ergonomiques et innovants</strong>, grâce à une <strong className='text-emerald-500'>fusion</strong> réfléchie de la science et de l'art numérique.
                        </p>
                    </div>
                }

            </div>

        </Section>
    );
  }
export default About;