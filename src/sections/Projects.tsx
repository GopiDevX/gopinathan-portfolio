import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

import { PROJECTS } from "../data";

const Projects = () => {
    return (
        <Section id="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Featured Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;
