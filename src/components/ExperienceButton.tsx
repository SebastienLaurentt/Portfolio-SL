
interface ExperienceButtonProps {
    activeButton: string;
    setActiveButton: (button: string) => void;
    experienceTitle: string;
    experienceDate: string;
  }

function ExperienceButton ( {activeButton, setActiveButton, experienceTitle, experienceDate}: ExperienceButtonProps ) {


    const handleButtonClick = (buttonTitle: string) => {
      setActiveButton(buttonTitle);
    };

    return(
        <button 
            className={`${
                activeButton === experienceTitle
                ? 'bg-sky-800 text-white'
                : 'border border-sky-800  md:hover:bg-sky-800 md:hover:text-white'
            } flex flex-col p-2 rounded-lg items-center`}
            onClick={() => handleButtonClick(experienceTitle)}
        >
            <span>
                {experienceTitle}
            </span>
            <span>
                {experienceDate}
            </span>
        </button>

    )
}

export default ExperienceButton;