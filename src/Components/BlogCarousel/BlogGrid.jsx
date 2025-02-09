import React from 'react';
import { Link } from 'react-router-dom';

// Importing the images you already have locally
import react from "../../Components/Images/react.jpg";
import html from "../../Components/Images/html.jpg";
import javascript from "../../Components/Images/js.png";
import css from "../../Components/Images/css.png";
import python from "../../Components/Images/python.jpg";
import sql from "../../Components/Images/sql.png";
import git from "../../Components/Images/git.png";
import aws from "../../Components/Images/aws.png";
import oop from "../../Components/Images/oop.jpg";
import jira from "../../Components/Images/jira.png";
import cicd from "../../Components/Images/cdci.png";


import './BlogStyles.css';

const BlogGrid = () => {

  // Use the imported images directly in your products array
  const products = [
    { id: 1, name: 'React Js', rating: 5, image: react },
    { id: 2, name: 'HTML', rating: 5, image: html },
    { id: 3, name: 'JavaScript', rating: 5, image: javascript },
    { id: 4, name: 'CSS', rating: 4, image: css },
    { id: 5, name: 'Python', rating: 4, image: python },
    { id: 6, name: 'SQL', rating: 4, image: sql },
    { id: 7, name: 'Git', rating: 5, image: git },
    { id: 8, name: 'AWS Certification', rating: 5, image: aws },
    { id: 10, name: 'Object Oriented Programming', rating: 5, image: oop },
    { id: 11, name: 'Scrum', rating: 4, image: jira },
    { id: 13, name: 'JIRA', rating: 4, image: jira },
    { id: 14, name: 'CI/CD', rating: 3, image: cicd },
  ];

  return (
    <div className="container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      
      <div className="blog-grid">
        {products.map((product) => (
          <article key={product.id} className="blog-card">
            <Link to={`/product/${product.name}`} className="blog-link">
              <div className="blog-image">
                <img src={jira} alt={product.name} /> 
              </div>
              
              <div className="blog-content">
                <h2>{product.name}</h2>
                
                <div className="blog-meta">
                  <span>Rating: {product.rating}</span>
                </div>
                
                <span className="read-more">VIEW MORE</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
