import React, { useState, useEffect } from "react";
import "../Styles/Home.css";

const Home = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [showPopup, setShowPopup] = useState(true);

  const boxOptions = {
    cleaning: {
      name: "Cleaning Box",
      icon: "🧼",
      items: [
        "All-purpose cleaner",
        "Glass cleaner",
        "Disinfectant wipes",
        "Microfiber cloths",
        "Sponges",
        "Trash bags",
      ],
      price: "$149.99",
    },
    kitchen: {
      name: "Kitchen Box",
      icon: "🔪",
      items: [
        "Dish soap",
        "Sponges",
        "Paper towels",
        "Trash bags",
        "Aluminum foil",
        "Food storage containers",
      ],
      price: "$319.99",
    },
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopup && event.target.classList.contains("popup-overlay")) {
        setShowPopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="home light-theme">
      {/* Email Signup Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <div className="popup-content">
              <h3>🎉 Get 10% Off Your First Order!</h3>
              <p>Sign up for our newsletter and receive a 10% discount code</p>
              <div className="popup-form">
                <input type="email" placeholder="Enter your email" />
                <button className="btn-primary">Get My Discount</button>
              </div>
              <p className="popup-note">No spam, unsubscribe at any time</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-icon">🚛</div>
            <h2>
              Pick<span className="logo-accent">n</span>Move
            </h2>
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home">🏠 Home</a>
            </li>
            <li>
              <a href="#boxes">📦 Box Options</a>
            </li>
            <li>
              <a href="#services">⭐ Services</a>
            </li>
            <li>
              <a href="#about">💼 About</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Stress-Free Moving • Free Shipping</span>
          </div>
          <h1>
            Move <span className="highlight">Smarter</span> with PicknMove
          </h1>
          <p>
            Custom moving boxes delivered to your door. Choose from our curated
            boxes with <strong>free shipping included</strong> for a perfect
            move.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => document.getElementById("boxes").scrollIntoView()}
            >
              Choose Your Box
            </button>
            <button className="btn-secondary">How It Works</button>
          </div>
          <div className="hero-features">
            <div className="feature">
              <span>🚚 Free Shipping</span>
            </div>
            <div className="feature">
              <span>⭐ 5-Star Rated</span>
            </div>
            <div className="feature">
              <span>🎯 Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Box Options Section */}
      <section id="boxes" className="boxes">
        <div className="container">
          <div className="section-header">
            <h2>
              Choose Your Perfect{" "}
              <span className="accent-text">Moving Box</span>
            </h2>
            <p className="section-subtitle">
              Select from our premium moving boxes with{" "}
              <strong>free shipping included</strong>
            </p>
          </div>

          <div className="boxes-grid">
            {/* Cleaning Box */}
            <div
              className={`box-option ${
                selectedBox === "cleaning" ? "selected" : ""
              }`}
              onClick={() => setSelectedBox("cleaning")}
            >
              <div className="box-header">
                <div className="box-icon">{boxOptions.cleaning.icon}</div>
                <div className="box-badge">🧽 Most Popular</div>
              </div>
              <h3>{boxOptions.cleaning.name}</h3>
              <p className="box-price">{boxOptions.cleaning.price}</p>
              <div className="shipping-badge">🚚 Free Shipping</div>
              <ul className="box-items">
                {boxOptions.cleaning.items.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✅</span> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">🛒 Select This Box</button>
            </div>

            {/* Kitchen Box */}
            <div
              className={`box-option ${
                selectedBox === "kitchen" ? "selected" : ""
              }`}
              onClick={() => setSelectedBox("kitchen")}
            >
              <div className="box-header">
                <div className="box-icon">{boxOptions.kitchen.icon}</div>
                <div className="box-badge">🔥 Best Value</div>
              </div>
              <h3>{boxOptions.kitchen.name}</h3>
              <p className="box-price">{boxOptions.kitchen.price}</p>
              <div className="shipping-badge">🚚 Free Shipping</div>
              <ul className="box-items">
                {boxOptions.kitchen.items.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✅</span> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">🛒 Select This Box</button>
            </div>
          </div>

          {/* Bundle Offer */}
          <div className="bundle-offer">
            <div className="bundle-content">
              <div className="bundle-icons">
                <div className="box-icon">{boxOptions.cleaning.icon}</div>
                <div className="plus-icon">+</div>
                <div className="box-icon">{boxOptions.kitchen.icon}</div>
                <div className="equals-icon">=</div>
                <div className="free-icon">🛠️ FREE!</div>
              </div>
              <div className="bundle-text">
                <h3>Get Our Premium Tool Box FREE!</h3>
                <p>
                  Purchase both the Cleaning Box and Kitchen Box together and
                  receive our Premium Tool Box ($79.99 value) absolutely free!
                </p>
                <button className="btn-primary">🎁 Get This Bundle Deal</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>
              How <span className="accent-text">PicknMove</span> Works
            </h2>
            <p className="section-subtitle">
              Simple steps to your stress-free move with free shipping
            </p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">1️⃣</div>
              <div className="step-number">01</div>
              <h3>Choose Your Box</h3>
              <p>
                Select from our premium moving boxes - all include free shipping
                to your door
              </p>
            </div>
            <div className="step">
              <div className="step-icon">2️⃣</div>
              <div className="step-number">02</div>
              <h3>We Pack & Deliver Free</h3>
              <p>
                We carefully pack your selected items and deliver everything to
                your door with free shipping
              </p>
            </div>
            <div className="step">
              <div className="step-icon">3️⃣</div>
              <div className="step-number">03</div>
              <h3>Move Stress-Free</h3>
              <p>
                Everything you need arrives ready for your moving day. Just pack
                and go! 🎉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Simplify Your Move? 🎉</h2>
            <p>
              Join thousands of happy customers who moved stress-free with
              PicknMove
            </p>
            <button
              className="btn-primary large"
              onClick={() => document.getElementById("boxes").scrollIntoView()}
            >
              🚀 Start My Move Today
            </button>
            <div className="cta-stats">
              <div className="stat">
                <strong>5,000+</strong>
                <span>Happy Moves</span>
              </div>
              <div className="stat">
                <strong>4.9/5</strong>
                <span>Customer Rating</span>
              </div>
              <div className="stat">
                <strong>🚚 Free</strong>
                <span>Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🚛</span>
                <h3>PicknMove</h3>
              </div>
              <p>
                Your custom moving box solution with free shipping. Move
                smarter, not harder. 🎯
              </p>
              <div className="social-links">
                <span>📘</span>
                <span>📷</span>
                <span>🐦</span>
                <span>💼</span>
              </div>
            </div>
            <div className="footer-section">
              <h4>📞 Contact Us</h4>
              <p>📍 123 Move Street, City</p>
              <p>📱 (555) 123-PICK</p>
              <p>✉️ hello@picknmove.com</p>
              <p>🕒 Mon-Sun: 6AM-10PM</p>
            </div>
            <div className="footer-section">
              <h4>📦 Box Options</h4>
              <ul>
                <li>
                  <a href="#boxes">🧼 Cleaning Box</a>
                </li>
                <li>
                  <a href="#boxes">🔪 Kitchen Box</a>
                </li>
                <li>
                  <a href="#boxes">🎁 Bundle Deal</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>🚚 Services</h4>
              <ul>
                <li>
                  <a href="#services">Moving Services</a>
                </li>
                <li>
                  <a href="#services">Packing Service</a>
                </li>
                <li>
                  <a href="#services">Setup Service</a>
                </li>
                <li>
                  <a href="#services">Free Shipping</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 PicknMove. Made with ❤️ for stress-free moves.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
