import Section from "../components/Section";
import { Briefcase, Calendar } from "lucide-react";

import { EXPERIENCES } from "../data";

const Experience = () => {
    return (
        <Section id="experience" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>

            <div className="max-w-4xl mx-auto">
                <div className="relative space-y-12">
                    {/* Center Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                    {/* Left Line (Mobile) */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-white/10" />

                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Dot (Mobile Left / Desktop Center) */}
                            <div className="absolute left-[11px] md:left-1/2 top-0 w-3 h-3 bg-accent-cyan rounded-full shadow-[0_0_10px_#00f3ff] md:-translate-x-1/2 md:top-2 z-10" />

                            {/* Date Side */}
                            <div className={`w-full md:w-1/2 md:pt-1 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                                <div className="hidden md:block text-accent-cyan font-mono">
                                    {exp.period}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                <div className="md:hidden flex items-center gap-2 text-accent-cyan font-mono text-sm mb-2">
                                    <Calendar size={14} /> {exp.period}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-cyan transition-colors">{exp.role}</h3>
                                <div className={`flex items-center gap-2 text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    <Briefcase size={16} />
                                    <span>{exp.company}</span>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
