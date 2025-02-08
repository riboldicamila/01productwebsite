import React, { useState } from 'react';
import pottery03 from "../../Components/Images/pottery03.jpg"

import './CollectionPage.css';
import GenericButton from '../../Components/Button';

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: 'Wowed Art',
      price: 75.00,
      originalPrice: 800.00,
      image: pottery03,
      onSale: true,
      colors: ['red', 'black', 'blue'],
      rating: 4
    },
    {
      id: 2,
      name: 'Woodsy Art',
      price: 60.00,
      originalPrice: 950.00,
      image: pottery03,
      onSale: true,
      colors: ['red', 'green', 'yellow'],
      rating: 5
    },
    {
      id: 3,
      name: 'Wert Art',
      price: 80.00,
      image: pottery03,
      onSale: false,
      rating: 2
    },
   
  ];

  return (
    <div className="collection-container">
      <h1 className="collection-title">Sketch Art</h1>
      
      <p className="collection-description">
        Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and youre ready for summer!
      </p>

      <div className="banner">
        <div className="banner-content">
          <span className="new-arrival">NEW ARRIVALS</span>
          <h2 className="banner-title">Craft Collection</h2>
          <GenericButton />
        </div>
      </div>

      <div className="collection-controls">
        <div className="view-controls">
          <button 
            className={`view-btn ${viewMode === 'grid-large' ? 'active' : ''}`}
            onClick={() => setViewMode('grid-large')}
          >
            ⊞
          </button>
          <button 
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            ⊟
          </button>
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            ≡
          </button>
          <span className="product-count">Showing 20 of 20 products</span>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-container">
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                )}
                <span className="price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;