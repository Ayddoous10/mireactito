import React from 'react';
import './ImageCarousel.css';

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src="./images/eventoInfantil.jpeg" alt="Evento Infantil" />
        <img src="./images/evento familiar.jpeg" alt="Evento 2" />
        <img src="./images/bocinas.jpeg" alt="Evento 3" />
      </div>
    </div>
  );
}

export default ImageCarousel;
