// src/sections/Skills.tsx
import React from "react";
import { skills } from "../data/skills";
import { useInView } from "../hooks/useInView";

const Skills: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="section-light skills-section">
      <div
        ref={ref}
        className={`container reveal-section ${isInView ? "is-visible" : ""}`}
      >
        <h2 className="mb-4 text-center">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 mb-3">
              <div className="skill-card border rounded p-3 text-center shadow-sm">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
