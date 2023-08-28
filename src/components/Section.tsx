interface SectionProps {
    id?: string; 
    gradientToBl: boolean;
    paddingBottom: boolean
    className?: string;
    children: React.ReactNode;
  }


function Section ({
    id,
    gradientToBl,
    paddingBottom,
    className,
    children,
    }: SectionProps) {

    const isGradientToBl = gradientToBl
    ? 'bg-gradient-to-bl from-slate-900 to-gray-700'
    : 'bg-gradient-to-tl from-slate-900 to-gray-700';
    
    const isPaddingBottom = paddingBottom
    ? 'pb-12 md:pb-20'
    : '';

    return(
        <section id= {`${id}`} className= {` ${isGradientToBl} ${isPaddingBottom} ${className} py-4 md:py-8 px-8 `}>
            <>{children}</>
        </section>

    )
}

export default Section;