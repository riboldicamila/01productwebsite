import React, { useParams } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../HomeData.js";

import "./ProjectsDetails.css";

const ProjectsGrid = () => {
  return (
    <div className="creations">
      <div className="creations-container">
        <div className="header">
          <h1>Projects</h1>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <Link to={`/project/${project.slug}`} className="project-link">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h2>{project.title}</h2>

                  <div className="project-meta">
                    <span>{project.date}</span>
                    <span className="separator">•</span>
                    <span>{project.author}</span>
                  </div>

                  <p className="project-subtitle">{project.subtitle}</p>

                  <span className="read-more">READ MORE</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
