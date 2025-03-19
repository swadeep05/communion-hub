import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/HomePage.css'; 


const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">CommunionHub</h1>
        <nav className="home-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/events" className="nav-link">Events</Link>
          <Link to="/aboutpages" className="nav-link">About</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Connecting People Across Faiths & Interests</h2>
          <p className="hero-description">
            Join our community and explore events that bring people together through shared experiences.
          </p>
          <Button variant="primary" size="lg" as={Link} to="/events" className="explore-btn">
            Explore Events
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
