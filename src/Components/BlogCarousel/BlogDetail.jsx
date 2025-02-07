import React, {useParams} from 'react';
import { Link } from 'react-router-dom';
import './BlogStyles.css';


const BlogDetail = () => {
  const { slug } = useParams();
  
  const blog = {
    title: "Artem - Digital Marketing campaign",
    date: "17 Mar 2023",
    author: "Ishi Themes",
    content: "Full article content would go here...",
    image: "/sample-image-1.jpg"
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">
        ← Back to Articles
      </Link>
      
      <article className="blog-detail">
        <div className="detail-image">
          <img src={blog.image} alt={blog.title} />
        </div>
        
        <h1>{blog.title}</h1>
        
        <div className="detail-meta">
          <span>{blog.date}</span>
          <span className="separator">•</span>
          <span>{blog.author}</span>
        </div>
        
        <div className="detail-content">
          {blog.content}
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;