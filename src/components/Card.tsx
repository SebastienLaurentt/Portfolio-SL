import { EnglishLanguageContext } from "../contexts/LanguageProvider";
import { useContext } from 'react';

interface CardProps {
    mainImage: string;
    title: string;
    tags: {
      name: string;
    }[];
    description: string;
    website: string;
    github: string;
  }

function Card({ mainImage, title, tags, description, website, github }: CardProps) {

    const context = useContext(EnglishLanguageContext);

    if (!context) {
        throw new Error("EnglishLanguageContext is not available.");
    }

    const { englishLanguage } = context;

    return (
        <div className="flex flex-col bg-gray-700  rounded-lg p-4 ">
            <div className=" mb-4 flex justify-center">
                <img src={`${mainImage}`} alt="" className=" rounded-xl transition-all duration-400 hover:md:scale-[1.02] h-auto w-full " />
            </div>
            <div className="">
                <span className="cardTitle">
                    {title} 
                </span>
                <div className=" flex gap-x-2 text-cyan-400 mb-4">
                    {tags.map((item, key) => (
                            <span
                            key={key}
                            className=""
                            >
                            {item.name}
                        </span>
                    ))}
                </div>
                <p className=" text-white md:h-16 text-lg xl:text-xl ">{description}</p>
                { englishLanguage ? 

                    <div className="text-gray-300 flex gap-x-4 italic">
                        <a href={`${website}`} target="_blank"> View Website  </a>
                        <a href={`${github}`} target="_blank"> View GitHub  </a>
                    </div>
                
                :

                    <div className="text-gray-300 flex gap-x-4 italic">
                        <a href={`${website}`} target="_blank"> Voir Site </a>
                        <a href={`${github}`} target="_blank"> Voir GitHub  </a>
                    </div>


                }

            </div>
        </div>
    );
  }
  
  export default Card;