import React, {useParams} from 'react';
import { Link } from 'react-router-dom';
import { blogs } from "../../HomeData.js";

import './BlogStyles.css';

const BlogGrid = () => {

  return (
    <div className="container">
      <div className="header">
        <h1>Projects</h1>
      </div>
      
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.id} className="blog-card">
            <Link to={`/blog/${blog.slug}`} className="blog-link">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              
              <div className="blog-content">
                <h2>{blog.title}</h2>
                
                <div className="blog-meta">
                  <span>{blog.date}</span>
                  <span className="separator">•</span>
                  <span>{blog.author}</span>
                </div>
                
                <p className="blog-subtitle">{blog.subtitle}</p>
                
                <span className="read-more">READ MORE</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;