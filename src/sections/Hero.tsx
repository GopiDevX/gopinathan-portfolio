import Section from "../components/Section";
import { ArrowRight } from "lucide-react";
import Hero3D from "../components/Hero3D";
import { useRecruiterMode } from "../store/useRecruiterMode";

import { HERO_CONTENT } from "../data";

const Hero = () => {
    const { isRecruiterMode } = useRecruiterMode();
    return (
        <Section id="home" className="relative pt-32 overflow-hidden bg-transparent">
            <div className="z-10 relative pointer-events-none">
                {/* Ensure content is clickable */}
                <div className="pointer-events-auto md:pl-20">
                    <h1 className="font-bold mb-6 leading-tight">
                        <span className="block text-base md:text-lg text-accent-cyan mb-2 font-mono">{HERO_CONTENT.greeting}</span>
                        <span className="block text-3xl md:text-5xl text-white mb-4 tracking-tight">{HERO_CONTENT.name}</span>
                        <span className="block text-xl md:text-3xl text-gray-400 max-w-3xl">{HERO_CONTENT.title}</span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8">
                        {HERO_CONTENT.subtitle}
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-accent-blue/10 border border-accent-blue/50 rounded-full text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2 group"
                        >
                            {HERO_CONTENT.cta.primary}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 glass hover:bg-white/10 rounded-full text-white transition-all duration-300"
                        >
                            {HERO_CONTENT.cta.secondary}
                        </a>
                    </div>
                </div>
            </div>

            {/* 3D Scene Background */}
            {!isRecruiterMode && (
                <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-80 pointer-events-auto">
                    <Hero3D />
                </div>
            )}
        </Section>
    );
};

export default Hero;
