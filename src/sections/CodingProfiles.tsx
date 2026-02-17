import Section from "../components/Section";
import { CODING_PROFILES } from "../data";
import { Star, ExternalLink } from "lucide-react";

const CodingProfiles = () => {
    return (
        <Section id="coding-profiles">
            <h2 className="text-4xl font-bold mb-12 text-center">Coding Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {CODING_PROFILES.map((profile, index) => {
                    const Icon = profile.icon;
                    return (
                        <div
                            key={index}
                            className="glass-card overflow-hidden group flex flex-col h-full"
                        >
                            {/* Image Preview */}
                            <div className="relative h-48 overflow-hidden bg-black/50">
                                <img
                                    src={profile.image}
                                    alt={profile.platform}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                                    <Icon size={20} className="text-accent-purple" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2">{profile.platform}</h3>
                                <p className="text-gray-400 text-sm mb-4">@{profile.username}</p>

                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-accent-purple text-sm font-mono">
                                        <Star size={14} className="fill-current" />
                                        <span>{profile.rating}</span>
                                    </div>
                                    <a
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-accent-purple hover:text-white transition-colors group/link"
                                    >
                                        View Profile
                                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default CodingProfiles;
