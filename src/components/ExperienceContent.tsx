
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
        <div className="p-4 md:p-8  w-full text-center mt-8 xl:mt-32 xl:w-4/5 lg:mx-auto lg:flex">
            <div className='lg:w-1/2'>
                <h3 className="mb-0">{title}</h3>
                <h4 className="">{location}</h4>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <p dangerouslySetInnerHTML={{ __html: moreDescription }} />
            </div>
            <div className= "lg:w-2/3 lg:flex lg:justify-end">
                <img 
                    className="mt-12 md:mt-16 lg:mt-0 h-40 md:h-80 mx-auto lg:mx-0 "
                    src={`${srcImg}`}
                    alt={altImg} 
                />
            </div>
        </div>
    )
}

export default ExperienceContent;