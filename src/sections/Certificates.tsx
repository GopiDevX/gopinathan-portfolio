import Section from "../components/Section";
import { CERTIFICATES } from "../data";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
    return (
        <Section id="certificates" className="bg-secondary/30">
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {CERTIFICATES.map((cert, index) => (
                    <div
                        key={index}
                        className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-accent-cyan/30"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan group-hover:scale-110 transition-transform">
                                <Award size={24} />
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <ExternalLink size={20} />
                            </a>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-accent-cyan text-xs font-mono">{cert.date}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certificates;
