import { useState } from "react";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import { PROJECTS } from "../data";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

    return (
        <Section id="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </Section>
    );
};

export default Projects;
