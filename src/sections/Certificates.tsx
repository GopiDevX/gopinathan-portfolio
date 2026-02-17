import Section from "../components/Section";
import { CERTIFICATES } from "../data";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
    return (
        <Section id="certificates" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {CERTIFICATES.map((cert, index) => (
                    <div
                        key={index}
                        className="glass-card overflow-hidden group flex flex-col h-full"
                    >
                        {/* Image Preview */}
                        <div className="relative h-48 overflow-hidden bg-black/50">
                            <img
                                src={cert.image}
                                alt={cert.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full">
                                <Award size={20} className="text-accent-cyan" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{cert.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>

                            <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                                <span className="text-gray-500 text-xs font-mono">{cert.date}</span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-accent-cyan hover:text-white transition-colors group/link"
                                >
                                    View Certificate
                                    <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certificates;
