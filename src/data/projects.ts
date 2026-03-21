// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  techStack: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "Home Tutor System",
    description:
      "A system connecting students and tutors with search, ratings, forums, and a streamlined request system.",
    techStack: "Python, Django, HTML, CSS, JavaScript",
    image: "/src/assets/projects/home-tutor.png",
    githubLink: "https://github.com/asegithub2023/django-project",
  },
  {
    title: "E-commerce Catalog",
    description:
      "Mini e-commerce frontend with product listing, details, and cart functionality.",
    techStack: "React, TypeScript, Bootstrap",
    image: "/src/assets/projects/ecommerce.png",
    githubLink: "https://github.com/asegithub2023/ecommerce-catalog",
    liveLink: "https://ecommerce-catalogreact.netlify.app/",
  },
  {
    title: "Python PDF to JSON Extractor",
    description:
      "Extract structured data from PDF files into clean JSON using Python.",
    techStack: "Python, pdfplumber, jsonschema",
    image: "/src/assets/projects/job-scraper.png",
    githubLink: "https://github.com/asegithub2023/python-pdf-to-json-extractor",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Trello-like task management dashboard built with React and TypeScript.",
    techStack: "React, TypeScript",
    image: "/src/assets/projects/task-dashboard.png",
    githubLink: "https://github.com/asegithub2023/task-management-dashboard",
    liveLink: "https://taskmanagementreactjs.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Weather application displaying real-time weather data.",
    techStack: "React, TypeScript",
    image: "/src/assets/projects/weather.png",
    githubLink: "https://github.com/asegithub2023/weather-app",
     liveLink: "https://weatherapptypescriptreact.netlify.app/",
  },
  {
    title: "Job Scraper & Report Generator",
    description:
      "Automated Python job scraper that collects jobs and generates reports.",
    techStack: "Python, Web Scraping",
    image: "/src/assets/projects/job-scraper1.png",
    githubLink: "https://github.com/asegithub2023/job_scraper",
  },
];
