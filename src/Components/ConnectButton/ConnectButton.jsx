import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ConnectButton.css';

const ConnectButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/camila-riboldi/', '_blank');
  };
  
  return (
    <button className="connect-button" onClick={handleClick}>
      <div className="connect-text">
        <div>LinkedIn</div>
      </div>
    </button>
  );
};

export default ConnectButton;