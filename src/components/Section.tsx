import React, { type ReactNode } from "react";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center py-20 px-6 ${className}`}>
            <div className="max-w-screen-2xl mx-auto w-full">
                {children}
            </div>
        </section>
    );
};

export default Section;
