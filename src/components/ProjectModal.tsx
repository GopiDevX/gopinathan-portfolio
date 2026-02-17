import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        tags: string[];
        image: string;
        githubUrl?: string;
        demoUrl?: string;
    } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-3xl bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="relative h-64 md:h-80 w-full">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
                </div>

                <div className="p-8 -mt-12 relative">
                    <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                        {project.description}
                    </p>

                    <div className="flex gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all font-medium"
                            >
                                <Github size={20} /> View Code
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-accent-blue/10 border border-accent-blue/20 rounded-xl text-accent-blue hover:bg-accent-blue/20 transition-all font-medium"
                            >
                                <ExternalLink size={20} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
