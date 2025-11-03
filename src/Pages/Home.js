import React from "react";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home dark-theme">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>
              Pink<span className="logo-accent">n</span>Move
            </h2>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>
            Moving Made <span className="pink-text">Beautiful</span>
          </h1>
          <p>
            Experience stress-free moving with our reliable, efficient, and
            pink-powered moving services in the dark.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="moving-truck">🌙🚛💖</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>
            Our <span className="pink-text">Services</span>
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌃🏠</div>
              <h3>Residential Moving</h3>
              <p>
                From apartments to large homes, we handle your move with care
                and precision, day or night.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌆🏢</div>
              <h3>Commercial Moving</h3>
              <p>
                Office relocations with minimal downtime and maximum efficiency
                after hours.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">📦✨</div>
              <h3>Packing Services</h3>
              <p>
                Professional packing to ensure your belongings arrive safely
                under any conditions.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌙🚚</div>
              <h3>24/7 Moving</h3>
              <p>
                Round-the-clock service for your convenience and flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>
                Why Choose <span className="pink-text">PinknMove</span>?
              </h2>
              <p>
                We're revolutionizing the moving industry with our unique dark
                theme approach that combines strength with style under the
                moonlight.
              </p>
              <ul className="features-list">
                <li>🌙 Fully licensed and insured</li>
                <li>⭐ 24/7 moving professionals</li>
                <li>🚛 Modern, well-maintained equipment</li>
                <li>💎 Competitive pricing</li>
                <li>📱 Real-time tracking</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Families Moved</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Customer Satisfaction</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Make Your Move?</h2>
          <p>
            Get your free, no-obligation quote today! Day or night, we're here
            for you.
          </p>
          <button className="btn-primary">Start Your Move</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>PinknMove</h3>
              <p>Making every move a beautiful experience under the stars.</p>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>📞 (555) 123-PINK</p>
              <p>✉️ hello@pinknmove.com</p>
              <p>📍 123 Move Street, Night City</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Operating Hours</h4>
              <p>🌙 24/7 Service</p>
              <p>⭐ Always Available</p>
              <p>🚛 Emergency Moves</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2024 PinknMove. All rights reserved. Making moves in the
              dark.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
