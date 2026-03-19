// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm project-card">

        {/* Project Screenshot */}
        <img
          src={project.image}
          alt={project.title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>
          <p className="text-muted mb-2">
            <strong>Tech Stack:</strong> {project.techStack}
          </p>

          <div className="mt-auto">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                className="btn btn-outline-primary btn-sm me-2"
              >
                GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                className="btn btn-primary btn-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
