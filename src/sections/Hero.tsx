// src/sections/Hero.tsx
import React from "react";
import TypingText from "../components/TypingText";
import cvPdf from "../assets/cv/Asefa_Negash_CV.pdf";

const Hero: React.FC = () => {
  const titles = [
    "Full-Stack Developer | Python, React, Django, TypeScript",
    "Data Scraper | Python Web Scraping & Automation",
    "Freelance Developer | Upwork & Projects",
  ];

  const handleHireMeClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="section-light hero-section">
      <div className="container">
        <h1 className="display-4 fw-bold">Asefa Negash</h1>
        <h3 className="mt-3 text-primary">
          <TypingText
            texts={titles}
            typingSpeed={100}
            deletingSpeed={50}
            pauseTime={1500}
          />
        </h3>
        <div className="mt-4 d-flex flex-wrap gap-3">
          <a
            href={cvPdf}
            download
            className="btn btn-primary d-inline-flex align-items-center"
          >
            <i className="bi bi-download me-2" aria-hidden="true"></i>
            <span>Download CV</span>
          </a>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleHireMeClick}
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
