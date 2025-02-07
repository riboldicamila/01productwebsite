import React, { useState } from 'react';
import './CollectionPage.css';

const CollectionPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Alphabetically, Z-A');

  const products = [
    {
      id: 1,
      name: 'Wowed Art',
      price: 75.00,
      originalPrice: 800.00,
      image: '/path-to-image-1.jpg',
      onSale: true,
      colors: ['red', 'black', 'blue'],
      rating: 4
    },
    {
      id: 2,
      name: 'Woodsy Art',
      price: 60.00,
      originalPrice: 950.00,
      image: '/path-to-image-2.jpg',
      onSale: true,
      colors: ['red', 'green', 'yellow'],
      rating: 5
    },
    {
      id: 3,
      name: 'Wert Art',
      price: 80.00,
      image: '/path-to-image-3.jpg',
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
          <button className="shop-now-btn">SHOP NOW</button>
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

        <div className="sort-control">
          <label>Sort by</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Alphabetically, Z-A</option>
            <option>Alphabetically, A-Z</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
          </select>
        </div>
      </div>

      <div className={`products-grid ${viewMode}`}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.onSale && <span className="sale-badge">Sale</span>}
              <img src={product.image} alt={product.name} />
              <div className="rating">
                {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-container">
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                )}
                <span className="price">${product.price.toFixed(2)}</span>
              </div>
              {product.colors && (
                <div className="color-options">
                  {product.colors.map(color => (
                    <span 
                      key={color} 
                      className="color-dot"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;