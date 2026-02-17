import Section from "../components/Section";
import { ArrowRight } from "lucide-react";
import Hero3D from "../components/Hero3D";
import { useRecruiterMode } from "../store/useRecruiterMode";
import Typewriter from "../components/Typewriter";

import { HERO_CONTENT } from "../data";

const Hero = () => {
    const { isRecruiterMode } = useRecruiterMode();
    return (
        <Section id="home" className="relative pt-32 overflow-hidden bg-transparent">
            <div className="z-10 relative pointer-events-none">
                {/* Ensure content is clickable */}
                <div className="pointer-events-auto md:pl-20">
                    <h1 className="font-bold mb-6 leading-tight min-h-[160px] md:min-h-[200px]">
                        <span className="block text-base md:text-lg text-accent-cyan mb-2 font-mono">
                            <Typewriter text={HERO_CONTENT.greeting} speed={30} />
                        </span>
                        <span className="block text-3xl md:text-5xl text-white mb-4 tracking-tight">
                            <Typewriter text={HERO_CONTENT.name} speed={50} delay={800} />
                        </span>
                        <span className="block text-xl md:text-3xl text-gray-400 max-w-3xl">
                            <Typewriter text={HERO_CONTENT.title} speed={30} delay={1500} />
                        </span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 min-h-[60px]">
                        <Typewriter text={HERO_CONTENT.subtitle} speed={20} delay={2500} />
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-accent-blue/10 border border-accent-blue/50 rounded-full text-accent-blue hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center gap-2 group"
                        >
                            <Typewriter text={HERO_CONTENT.cta.primary} speed={30} delay={4000} />
                            <span className="opacity-0 animate-in fade-in duration-500 delay-[4500ms] fill-mode-forwards" style={{ animationDelay: '4.5s', animationFillMode: 'forwards' }}>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </span>
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 glass hover:bg-white/10 rounded-full text-white transition-all duration-300"
                        >
                            <Typewriter text="Download Resume" speed={30} delay={4500} />
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
