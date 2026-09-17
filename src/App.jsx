import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">TechAssign</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">SMART TECHNICIAN ASSIGNMENT</p>

          <h1>
            Get the right technician
            <span> for the right job.</span>
          </h1>

          <p className="description">
            A smart service management system that connects customers with
            suitable technicians based on skills, availability, workload and
            location.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Request a Service</button>
            <button className="secondary-btn">Find a Technician</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">🔧</div>
          <h3>Smart Assignment</h3>
          <p>
            Automatically match service requests with the most suitable
            available technician.
          </p>

          <div className="status">
            <span className="status-dot"></span>
            System Ready
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>

        <p className="section-text">
          Request professional assistance for different types of technical
          services.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <div>⚡</div>
            <h3>Electrical</h3>
            <p>Electrical installation, repair and maintenance.</p>
          </div>

          <div className="service-card">
            <div>🔧</div>
            <h3>Plumbing</h3>
            <p>Plumbing repair and maintenance services.</p>
          </div>

          <div className="service-card">
            <div>💻</div>
            <h3>Computer Repair</h3>
            <p>Hardware and software troubleshooting.</p>
          </div>

          <div className="service-card">
            <div>❄️</div>
            <h3>AC Repair</h3>
            <p>Air conditioner installation and servicing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;