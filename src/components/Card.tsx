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
    return (
        <div className="flex flex-col bg-gray-700  rounded-lg p-4 ">
            <div className=" mb-4 flex justify-center">
                <img src={`${mainImage}`} alt="" className=" rounded-xl transition-all duration-400 hover:md:scale-[1.02] h-64" />
            </div>
            <div className="">
                <h5 className="xl:text-3xl">
                    {title} 
                </h5>
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
                <p className="md:h-16 text-lg xl:text-xl ">{description}</p>
                <div className="text-gray-300 flex gap-x-4 italic">
                    <a href={`${website}`}> View Website  </a>
                    <a href={`${github}`}> View GitHub  </a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Card;