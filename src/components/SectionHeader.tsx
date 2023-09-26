interface SectionHeaderProps {
    sectionTitle: string;
    sectionDescription: string;
    children:React.ReactNode;
  }

function SectionHeader({sectionTitle, sectionDescription, children}: SectionHeaderProps){
    return(
        <>
            {children}
            <h2>
                {sectionTitle}
            </h2>
            <p className="sectionDescription">
                {sectionDescription}
            </p>
        </>
    )
}

export default SectionHeader;