interface SectionProps {
    id?: string; 
    heightScreen: boolean;
    gradientToBl: boolean;
    className?: string;
    children: React.ReactNode;
  }


function Section ({
    id,
    heightScreen,
    gradientToBl,
    className,
    children,
    }: SectionProps) {

    const isHeightScreen = heightScreen
    ? 'min-h-screen'
    : '';

    const isGradientToBl = gradientToBl
    ? 'bg-gradient-to-bl from-slate-900 to-gray-700'
    : 'bg-gradient-to-tl from-slate-900 to-gray-700';


    return(
        <section id= {`${id}`} className= {` ${isHeightScreen} ${isGradientToBl} ${className} p-8`}>
            <>{children}</>
        </section>

    )
}

export default Section;