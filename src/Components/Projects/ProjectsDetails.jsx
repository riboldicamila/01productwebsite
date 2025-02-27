import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { PROJECTS } from '../../Data/HomeData.js';
import GenericButton from '../GenericButton/Button.jsx';

import './ProjectsDetails.css';

const ProjectsDetails = () => {
  const { slug } = useParams();
  
  const project = PROJECTS.find((b) => b.slug === slug);

  if (!project) {
    return (
      <div className="container">
        <Link to="/" className="back-link">← Back to Projects</Link>
        <h2>Artículo no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="creations-container">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      
      <article className="project-detail">
        <div className="detail-image">
          <img src={project.image} alt={project.title} />
        </div>
        
        <h1>{project.title}</h1>
        
        <div className="detail-meta">
          <span>{project.date}</span>
          <span className="separator">•</span>
          <span>{project.author}</span>
        </div>
        
        <div className="detail-content">
          <p>{project.subtitle}</p>
        </div>
        
        <GenericButton text = 'Go to site' to = {project.url} className="go-margin"/>
      </article>
    </div>
  );
};

export default ProjectsDetails;
