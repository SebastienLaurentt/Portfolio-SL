import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeProvider";

interface SectionProps {
  id?: string;
  gradientToBl: boolean;
  paddingBottom: boolean;
  className?: string;
  children: React.ReactNode;
}

function Section({
  id,
  gradientToBl,
  paddingBottom,
  className,
  children,
}: SectionProps) {
  const isGradientToBl = gradientToBl
    ? "bg-gradient-to-bl from-slate-900 to-gray-700"
    : "bg-gradient-to-tl from-slate-900 to-gray-700";

  const isPaddingBottom = paddingBottom ? "pb-28 md:pb-32" : "";

  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("DarkModeContext is not available.");
  }

  const { darkMode } = context;

  const isDarkMode = darkMode ? isGradientToBl : "white-theme";

  return (
    <section
      id={`${id}`}
      className={`${isDarkMode} ${isPaddingBottom} ${className} py-4 md:py-8 px-8 text-white`}
    >
      {children}
    </section>
  );
}

export default Section;
