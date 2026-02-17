import Section from "../components/Section";
import { CODING_PROFILES } from "../data";
import { Code, Star } from "lucide-react";

const CodingProfiles = () => {
    return (
        <Section id="coding-profiles">
            <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {CODING_PROFILES.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 group border border-white/5 hover:border-accent-purple/50"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-accent-purple group-hover:scale-110 transition-transform">
                            <Code size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{profile.platform}</h3>
                        <p className="text-gray-400 text-sm mb-4">@{profile.username}</p>
                        <div className="flex items-center gap-2 px-3 py-1 bg-accent-purple/10 rounded-full text-accent-purple text-sm font-mono">
                            <Star size={14} className="fill-current" />
                            <span>{profile.rating}</span>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default CodingProfiles;
