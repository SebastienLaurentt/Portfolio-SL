import { SiMinutemailer } from 'react-icons/si';

import { ImLocation2 } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'

function Contact () {
    return (
    <section id="contact" className="bg-gradient-to-tl from-slate-900 to-gray-700 p-8">
        <div>
          <SiMinutemailer size={52} className="mx-auto text-rose-700" />
          <h2>Contact</h2>
          <p className='sectionDescription'>Do you have any questions or requests? Please feel free to contact me !</p>
          <div className='flex justify-center gap-x-6 mb-8'>
            <div>
              <ImLocation2 size={52} className="mx-auto text-emerald-500 mb-2" />
              <span className='text-white'>Lyon, France </span>
            </div>
            <div>
              <GrMail size={52} className="mx-auto text-emerald-500 mb-2" />
              <span className='text-white'> Slaurent.26@gmail.com </span>
            </div>
          </div>
        </div>
        

        <div className="md:px-4">
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
        </div>

    </section>
    );
  }
export default Contact;