import { type FC, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const springConfig = { damping: 20, stiffness: 300 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className="w-full"
        >
            <motion.div
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="glass-card overflow-hidden group relative h-[450px] flex flex-col"
            >
                {/* Project Image Area */}
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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

                    <div className="flex gap-4 mt-auto">
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
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
