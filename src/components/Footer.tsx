import React from "react";

const Footer: React.FC = () => {
  const handleBackToTop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section text-white mt-5">
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          {/* Name & Social Links (left / centered on mobile) */}
          <div className="text-center text-md-start">
            <h5 className="mb-2">Asefa Negash</h5>

            <div className="d-flex justify-content-center justify-content-md-start gap-4">
              <a
                href="mailto:aseaau21@gmail.com"
                className="text-white fs-4"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

              <a
                href="https://github.com/asegithub2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://t.me/aseaau"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i>
              </a>

              <a
                href="https://www.upwork.com/freelancers/~yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="Upwork"
              >
                <i className="bi bi-briefcase-fill"></i>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Back to top (right on desktop, bottom on mobile) */}
          <div className="mt-2 mt-md-0 ms-md-auto">
            <button
              type="button"
              className="btn btn-outline-light btn-sm back-to-top-btn"
              onClick={handleBackToTop}
            >
              <i className="bi bi-arrow-up-short me-1" />
              Back to top
            </button>
          </div>
        </div>

        {/* Copyright (centered) */}
        <p className="mb-0 small mt-3 text-center">
          © {new Date().getFullYear()} Asefa Negash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
