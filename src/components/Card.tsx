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
        <div className="flex flex-col bg-gray-700  rounded-lg p-4">
            <div className="flex justify-center mb-4 h-52">
                <img src={`${mainImage}`} alt="" className="rounded-xl transition-all duration-400 hover:md:scale-[1.05]" />
            </div>
            {/* <div
                className= "bg-cover bg-center bg-no-repeat relative h-32"
                style={{ backgroundImage: `url(${mainImage})` }}
            /> */}
            <div className="">
                <h5>
                    {title} 
                </h5>
                <div className=" flex gap-x-2 text-cyan-400 mb-4">
                    {tags.map((item, key) => (
                            <span
                            key={key}
                            className="{`px-2 py-0.5 rounded-md text-sm font-bold`}"
                            >
                            {item.name}
                        </span>
                    ))}
                </div>
                <p>{description}</p>
                <div className="text-gray-300 flex gap-x-4 italic">
                    <a href={`${website}`}> View Website  </a>
                    <a href={`${github}`}> View GitHub  </a>
                </div>
            </div>
        </div>
    );
  }
  
  export default Card;