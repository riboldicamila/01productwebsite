import React from 'react';
import './ServicesBanner.css'; 

const ServicesBanner = () => {
  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <p>Discover our fantastic early booking discounts & start planning your journey.</p>

      <div className="service-cards">
        <div className="service-card">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          </div>
          <h3>FREE RESOURCES</h3>
          <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          </div>
          <h3>MULTI PURPOSE</h3>
          <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
          </div>
          <h3>FULLY RESPONSIVE</h3>
          <p>Bring to the table win-win survival strategies to ensure proactive domination.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;