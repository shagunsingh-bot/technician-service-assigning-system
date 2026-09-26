import { useState } from "react";
import "./App.css";

function App() {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [submittedRequest, setSubmittedRequest] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    service: "Electrical",
    location: "",
    details: "",
  });

  const technicians = {
    Electrical: { name: "Arjun Kumar", rating: "4.9", eta: "25 min" },
    Plumbing: { name: "Priya Sharma", rating: "4.8", eta: "30 min" },
    "Computer Repair": { name: "Rahul Verma", rating: "4.9", eta: "20 min" },
    "AC Repair": { name: "Neha Patel", rating: "4.7", eta: "35 min" },
  };

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedRequest({
      ...formData,
      technician: technicians[formData.service],
    });
  }

  function openRequestForm() {
    setSubmittedRequest(null);
    setShowRequestForm(true);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">TechAssign</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <button className="login-btn" onClick={openRequestForm}>
            Request service
          </button>
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
            <button className="primary-btn" onClick={openRequestForm}>
              Request a Service
            </button>

            <button className="secondary-btn" onClick={openRequestForm}>
              Find a Technician
            </button>
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

      {showRequestForm && (
        <section className="request-section">
          <div className="request-panel">
            <button
              className="close-btn"
              onClick={() => setShowRequestForm(false)}
            >
              ×
            </button>

            {!submittedRequest ? (
              <>
                <p className="tagline">SERVICE REQUEST</p>
                <h2>Tell us what you need</h2>

                <p className="request-intro">
                  We will match your request with an available technician.
                </p>

                <form className="request-form" onSubmit={handleSubmit}>
                  <label>
                    Your name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    Service needed
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {Object.keys(technicians).map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Your location
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Area or address"
                      required
                    />
                  </label>

                  <label>
                    Describe the issue
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Briefly describe the problem"
                      required
                    />
                  </label>

                  <button className="primary-btn" type="submit">
                    Find my technician
                  </button>
                </form>
              </>
            ) : (
              <div className="match-result">
                <div className="success-icon">✓</div>

                <p className="tagline">REQUEST RECEIVED</p>
                <h2>We found a match!</h2>

                <p>
                  Hi {submittedRequest.name}, your{" "}
                  {submittedRequest.service.toLowerCase()} request near{" "}
                  {submittedRequest.location} has been assigned.
                </p>

                <div className="technician-match">
                  <div className="technician-avatar">
                    {submittedRequest.technician.name.charAt(0)}
                  </div>

                  <div>
                    <strong>{submittedRequest.technician.name}</strong>
                    <p>
                      Available technician · ★{" "}
                      {submittedRequest.technician.rating}
                    </p>
                  </div>

                  <span>{submittedRequest.technician.eta}</span>
                </div>

                <button
                  className="secondary-btn"
                  onClick={() => setShowRequestForm(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </section>
      )}

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