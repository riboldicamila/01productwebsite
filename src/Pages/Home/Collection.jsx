import React, { useState } from "react";

import "./CollectionPage.css";
import GenericButton from "../../Components/Button";
import { products } from "../../Data/CollectionData";

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="collection-container">
      <h1 className="collection-title">Technologies</h1>

      <p className="collection-description">
        These are some of the skills and technologies I have picked up along the
        way!
      </p>

      <div className="banner">
        <div className="banner-content">
          <span className="new-arrival">SOFTWARE DEVELOPMENT</span>
          <h2 className="banner-title">Skills</h2>
          <GenericButton
            text="LinkedIn"
            to="https://www.linkedin.com/in/camila-riboldi/"
          />
        </div>
      </div>

      <div className="collection-controls">
        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === "grid-large" ? "active" : ""}`}
            onClick={() => setViewMode("grid-large")}
          >
            ⊞
          </button>
          <button
            className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            ⊟
          </button>
          <button
            className={`view-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            ≡
          </button>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
