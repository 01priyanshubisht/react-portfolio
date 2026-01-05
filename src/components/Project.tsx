import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import "../assets/styles/Project.scss";

const projectsData = [
  {
    image: mock07,
    title: "AI Government Document Flow",
    description:
      "Transforming government document management with AI summarization, smart routing, and blockchain-verified audit trails.",
    link: "https://github.com/savetree-1/gov-docflow-ai",
  },
  {
    image: mock06,
    title: "Civic Issue Management",
    description:
      "A full-stack reporting platform using ML-based categorization to manage public complaints via an admin dashboard.",
    link: "https://github.com/01priyanshubisht/Civic-Issue-Complaint-Management-Platform",
  },
  {
    image: mock05,
    title: "Wildlife Patrol Application",
    description:
      "Optimizing patrol routes in Jim Corbett National Park using advanced graph algorithms for ranger safety.",
    link: "https://github.com/01priyanshubisht/Optimize-Patrol-Routes-in-Jim-Corbett-National-Park",
  },
  {
    image: mock04,
    title: "IRIS Detection",
    description:
      "Using OpenCV and Python to detect pupils and count blinks in real-time via webcam streams.",
    link: "https://github.com/01priyanshubisht/IRIS-Detection",
  },
  {
    image: mock03,
    title: "Image Recognition CNN",
    description:
      "Deep learning project using CNNs to categorize images into 'clean' or 'dirty' classifications.",
    link: "https://github.com/01priyanshubisht/Image-Recognition-Using-CNN",
  },
  {
    image: mock02,
    title: "Personal Finance Manager",
    description:
      "Empowering individuals to track income, expenses, and savings with analytical financial goals.",
    link: "https://github.com/01priyanshubisht/Finance-Manager",
  },
  {
    image: mock01,
    title: "DP Hacking Game",
    description:
      "A web-based simulation of the NoPixel 4.0 hacking mini-games built for competitive practice.",
    link: "https://github.com/01priyanshubisht/DP-Hacking-Game",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="section-title">Personal Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <div className="hover-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <GitHubIcon /> View on GitHub
                </a>
              </div>
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-footer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-github-link"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
