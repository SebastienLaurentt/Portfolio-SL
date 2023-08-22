interface SectionHeaderProps {
    sectionTitle: string;
    sectionDescription: string;
  }

function SectionHeader({sectionTitle, sectionDescription}: SectionHeaderProps){
    return(
        <>
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