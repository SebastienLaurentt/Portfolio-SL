
interface ExperienceContentProps {
    title: string;
    location: string;
    description: string;
    moreDescription: string;
    srcImg: string;
    altImg: string;
  }

function ExperienceContent ( {title, location, description, moreDescription, srcImg, altImg}: ExperienceContentProps ) {
    return(
        <div className="p-4 md:p-8  w-full text-center mt-8 xl:mt-32 xl:w-4/5 xl:mx-auto xl:flex xl:items-center">
            <div className='xl:w-2/3'>
                <h3 className="mb-0">{title}</h3>
                <h4 className="">{location}</h4>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <p dangerouslySetInnerHTML={{ __html: moreDescription }} />
            </div>
            <div className= "">
                <img 
                    className="w-4/5 mx-auto"
                    src={`${srcImg}`}
                    alt={altImg} 
                />
            </div>
        </div>
    )
}

export default ExperienceContent;