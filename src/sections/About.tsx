import Section from "../components/Section";
import { ABOUT_CONTENT } from "../data";

const About = () => {
    return (
        <Section id="about" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-8 text-center">{ABOUT_CONTENT.title}</h2>
            <div className="max-w-4xl mx-auto">
                <div className="text-center text-gray-400 mb-12">
                    <p className="text-lg leading-relaxed">{ABOUT_CONTENT.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {ABOUT_CONTENT.stats.map((stat, index) => (
                        <div key={index} className="glass p-6 rounded-2xl text-center hover:bg-white/5 transition-all duration-300">
                            <h3 className="text-4xl font-bold text-accent-cyan mb-2">{stat.value}</h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
