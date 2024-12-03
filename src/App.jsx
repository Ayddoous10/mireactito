import React, { useState } from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactaForm';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Salón de Fiestas La Casa Grande</h1>
            <p>El lugar perfecto para tus celebraciones</p>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <nav className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#fiestas-infantiles">Fiestas Infantiles</a></li>
            <li><a href="#eventos-familiares">Eventos Familiares</a></li>
            <li><a href="#servicios-personalizados">Servicios Personalizados</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Inicio */}
        <section id="inicio" className="inicio-section">
          <div className="logos-container">
            <p>Una empresa familiar respaldada por:</p>
            <div className="logos">
              <img src="/public/images/LogoLaCasaGrande.png" alt="Logo La Casa Grande" />
              <img src="/public/images/logoDecoraciones.jpeg" alt="Logo 2" />
            </div>
          </div>
        </section>

        {/* Carrusel de imágenes */}
        <section id="fiestas-infantiles" className="carousel-section">
          <h2>Fiestas Infantiles</h2>
          <div className="carousel">
        <img src="./images/eventoInfantil.jpeg" alt="Evento Infantil" />
        <img src="./images/fiestaInfantil2.jpg" alt="Evento 2" />
        <img src="./images/fiestaInfantil3.jpeg" alt="Evento 3" />
        <img src="./images/fiestaInfantil4.jpg" alt="Evento 4" />
<img src="./images/fiestaInfantil5.jpg" alt="Evento 5" />
<img src="./images/fiestaInfantil6.jpg" alt="Evento 6" />
<img src="./images/fiestaInfantil7.jpg" alt="Evento 7" />
      </div>
        </section>

        <section id="eventos-familiares" className="carousel-section">
          <h2>Eventos Familiares</h2>
<div className="carousel">
        <img src="./images/evento familiar.jpeg" alt="Evento Infantil" />
        <img src="./images/eventoFamiliar2.jpg" alt="Evento 2" />
        <img src="./images/evento Familiar3.jpg" alt="Evento 3" />
      </div>
        </section>

        <section id="servicios-personalizados" className="carousel-section">
          <h2>Servicios Personalizados</h2>
<div className="carousel">
        <img src="./images/FB_IMG_1733258493239.jpg" alt="Evento Infantil" />
        <img src="./images/FB_IMG_1733258505814.jpg" alt="Evento Infantil" />
        <img src="./images/salon2.png" alt="Evento 2" />
        <img src="./images/salon3.png" alt="Evento3"/>
        <img src="./images/bocinas.jpeg" alt="Evento 4" />
      </div>
        </section>

        {/* Formulario de contacto */}
        <section id="contacto" className="contact-section">
          <h2>Contacto</h2>
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 La Casa Grande. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="https://www.facebook.com/profile.php?id=100063643717406&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="mailto:vic2777@hotmail.com">Correo</a>
          <a href="https://wa.me/5535167129" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

export default App;



