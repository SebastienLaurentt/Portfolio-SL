
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
                ? 'bg-sky-900 text-white'
                : 'text-white border border-sky-900  md:hover:bg-sky-600 md:hover:text-white'
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