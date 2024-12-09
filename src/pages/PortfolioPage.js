import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/FooterInclude"; // Import the Footer component

function Portfolio() {
  const [projects, setProjects] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  return (
    <>
        <div className="inner-pages">

        <div className="portfolio-container">
        <h2>Portfolio</h2>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.url} className="project-link" target="_blank" rel="noopener noreferrer">Visit Project</a>
              </div>

              <img src={project.imageUrl} alt={project.title} className="project-image" />

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Portfolio;
