// src/sections/Projects.tsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useInView } from "../hooks/useInView";

const Projects: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="section-soft projects-section">
      <div
        ref={ref}
        className={`container reveal-section ${isInView ? "is-visible" : ""}`}
      >
        <h2 className="mb-4 text-center">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
