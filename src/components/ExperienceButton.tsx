
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
                ? 'bg-cyan-500 text-white'
                : 'bg-cyan-800 text-white md:hover:bg-cyan-500'
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