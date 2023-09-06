import { SiMinutemailer } from 'react-icons/si';

import { ImLocation2 } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import SectionHeader from '../components/SectionHeader';
import Section from '../components/Section';

import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';

function Contact ({ gradientToBl }: { gradientToBl: boolean }) {

    const context = useContext(EnglishLanguageContext);

    if (!context) {
      throw new Error("EnglishLanguageContext is not available.");
    }

    const { englishLanguage } = context;


    return (
      <Section id ="contact"  
        gradientToBl={gradientToBl}
        paddingBottom={false}
      >
        <div>
          <SiMinutemailer size={52} className="mx-auto text-rose-700" />

          { englishLanguage ? 
              <SectionHeader
                sectionTitle="Contact"
                sectionDescription="Do you have any questions or requests? Please feel free to contact me !"
              />

            :

              <SectionHeader
                sectionTitle="Contact"
                sectionDescription="Vous avez des questions ou  requêtes ? Contactez moi !"
              />
          }

          <div className='flex justify-center gap-x-6 mb-8'>
            <div>
              <ImLocation2 size={52} className="mx-auto text-emerald-500 mb-2" />
              <span className=''>Lyon, France </span>
            </div>
            <div>
              <GrMail size={52} className="mx-auto text-emerald-500 mb-2" />
              <span className=''> Slaurent.26@gmail.com </span>
            </div>
          </div>
        </div>
        

        {/* <div className="md:px-4">
          <form action="submit" >
              <div className="flex flex-col gap-y-2 md:gap-y-4 mb-4 md:text-lg text-white  ">
                  <input
                  type="text"
                  placeholder="Name"
                  className=""
                  />

                  <input
                  type="text"
                  placeholder="Email"
                  className=""
                  />

                  <input
                  type="text"
                  placeholder="Subject"
                  className=""
                  />

                  
                  <textarea
                  placeholder="Please describe your request"
                  className="h-52"
                  />
              </div>


          <button className=" text-white bg-cyan-700 text-md p-4 rounded-full">
              SEND REQUEST 
          </button>

          </form>
        </div> */}

      </Section>
    );
  }
export default Contact;