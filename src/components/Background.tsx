interface BackgroundProps {
    id?: string; 
    gradientToBl: boolean;
    className?: string;
    children: React.ReactNode;
  }


function Background ({
    id,
    gradientToBl,
    className,
    children,
    }: BackgroundProps) {

    const isGradientToBl = gradientToBl
    ? 'bg-gradient-to-bl from-slate-900 to-gray-700'
    : 'bg-gradient-to-tl from-slate-900 to-gray-700';
    

    return(
        <section id= {`${id}`} className= {` ${isGradientToBl}  ${className}`}>
            <>{children}</>
        </section>

    )
}

export default Background;