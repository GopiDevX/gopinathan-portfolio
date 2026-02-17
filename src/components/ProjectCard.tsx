import { type FC } from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubUrl?: string;
    demoUrl?: string;
}

const ProjectCard: FC<ProjectProps> = ({ title, description, tags, image, githubUrl, demoUrl }) => {
    return (
        <div className="glass-card overflow-hidden group flex flex-col h-full hover:border-accent-cyan/50 transition-colors duration-300">
            {/* Project Image Area */}
            <div className="relative h-48 overflow-hidden bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow z-20">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">{description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            <Github size={16} /> Code
                        </a>
                    )}
                    {demoUrl && (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-accent-cyan hover:text-cyan-300 transition-colors"
                        >
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
