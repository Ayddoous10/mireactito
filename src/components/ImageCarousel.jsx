import React from 'react';
import './ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src="./images/salon1.png" alt="Evento 1" />
        <img src="./images/salon2.png" alt="Evento 2" />
        <img src="./images/salon3.png" alt="Evento 3" />
      </div>
    </div>
  );
}

export default ImageCarousel;
