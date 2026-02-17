import Section from "../components/Section";
import { useRecruiterMode } from "../store/useRecruiterMode";

import { SKILLS } from "../data";

const TechStack = () => {
    const { isRecruiterMode } = useRecruiterMode();
    return (
        <Section id="tech" className="relative">
            <div className="flex flex-col items-center overflow-hidden">
                <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>

                <div className={`relative w-full max-w-6xl ${isRecruiterMode ? '' : 'mask-gradient'}`}>
                    {/* Gradient Masks */}
                    {!isRecruiterMode && (
                        <>
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
                        </>
                    )}

                    <div className={`flex gap-6 w-max ${isRecruiterMode ? 'flex-wrap justify-center' : 'animate-scroll hover:pause'}`}>
                        {/* Original + Duplicate for infinite scroll */}
                        {[...SKILLS, ...SKILLS].map((skill, index) => {
                            // If in recruiter mode, only show original items once (index < SKILLS.length)
                            if (isRecruiterMode && index >= SKILLS.length) return null;

                            const Icon = skill.icon;
                            // Use index % SKILLS.length to map colors correctly even for duplicated items if needed, 
                            // but here index is unique across the combined array. 
                            // Let's use the original skill index for color consistency.
                            const originalIndex = index % SKILLS.length;

                            return (
                                <div
                                    key={index}
                                    className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group min-w-[300px]"
                                >
                                    <div className={`mb-4 p-3 bg-white/5 rounded-xl w-fit transition-transform duration-300 ${isRecruiterMode ? '' : 'group-hover:scale-110'}`}>
                                        <Icon className={`w-8 h-8 ${originalIndex % 4 === 0 ? "text-accent-cyan" :
                                            originalIndex % 4 === 1 ? "text-accent-purple" :
                                                originalIndex % 4 === 2 ? "text-accent-blue" : "text-white"
                                            }`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.items.map((item) => (
                                            <span
                                                key={item}
                                                className="text-sm text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TechStack;
