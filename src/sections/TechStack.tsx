import Section from "../components/Section";


import { SKILLS } from "../data";

const TechStack = () => {
    return (
        <Section id="tech" className="relative">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {SKILLS.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                            >
                                <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    <Icon className={`w-8 h-8 ${index === 0 ? "text-accent-cyan" :
                                        index === 1 ? "text-accent-purple" :
                                            index === 2 ? "text-accent-blue" : "text-white"
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
        </Section>
    );
};

export default TechStack;
