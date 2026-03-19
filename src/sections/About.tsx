// src/sections/About.tsx
import React from "react";
import profileImg from "../assets/profile.jpg"; // ✅ FIX: import image

const About: React.FC = () => {
  return (
    <section id="about" className="section-soft about-section">
      <div className="container">
        <h2 className="mb-4 text-center">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={profileImg}
              alt="Asefa Negash"
              className="img-fluid rounded-circle mb-3"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <p>
              Hi, I’m <strong>Asefa Negash</strong>, a Full-Stack Developer
              specializing in Python, Django, React, and FastAPI. I help
              clients turn ideas into scalable web applications with clear
              communication and high-quality code.
            </p>
            <p>
              I graduated from <strong>Addis Ababa University</strong> with a
              degree in Computer Science (BCompSc, 2024) and have over 3 years
              of experience in backend and frontend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
