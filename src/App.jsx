import './App.css';
import ImageCarousel from './components/ImageCarousel'; // Carrusel de imágenes

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>La Casa Grande</h1>
        <p>El lugar ideal para tus celebraciones</p>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Carrusel de imágenes */}
        <section className="carousel-section">
          <h2>Galería</h2>
          <ImageCarousel />
        </section>

        {/* About Us */}
        <section className="about-us">
          <h2>¿Quiénes somos?</h2>
          <p>
            En La Casa Grande, ofrecemos un espacio único y elegante para tus eventos más especiales.
            Nuestro salón está diseñado para crear momentos inolvidables en bodas, cumpleaños y eventos corporativos.
          </p>
        </section>

        {/* Events */}
        <section className="events">
          <h2>Eventos que ofrecemos</h2>
          <ul>
            <li>Bodas</li>
            <li>Cumpleaños</li>
            <li>Eventos corporativos</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 La Casa Grande. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
