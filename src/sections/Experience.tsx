import Section from "../components/Section";
import { Briefcase, Calendar } from "lucide-react";

import { EXPERIENCES } from "../data";

const Experience = () => {
    return (
        <Section id="experience" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>

            <div className="max-w-3xl mx-auto">
                <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-0">
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] w-3 h-3 bg-accent-cyan rounded-full shadow-[0_0_10px_#00f3ff] md:left-auto md:right-[calc(50%+24px)] md:top-2" />

                            <div className={`md:flex items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Date (for desktop) */}
                                <div className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? 'text-left' : ''} text-accent-cyan font-mono pt-1`}>
                                    {exp.period}
                                </div>

                                {/* Content */}
                                <div className="md:w-1/2">
                                    <div className="md:hidden flex items-center gap-2 text-accent-cyan font-mono text-sm mb-2">
                                        <Calendar size={14} /> {exp.period}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                        <Briefcase size={16} />
                                        <span>{exp.company}</span>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
