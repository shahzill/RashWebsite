import React, { useState } from "react";
import "../Styles/Home.css";

const Home = () => {
  const [customItems, setCustomItems] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);

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
      price: "$29.99",
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
      price: "$34.99",
    },
    custom: {
      name: "Make Your Own Box",
      icon: "🎨",
      items: [],
      price: "Custom",
    },
  };

  const availableItems = [
    { name: "Bubble wrap", icon: "🫧" },
    { name: "Packing tape", icon: "📏" },
    { name: "Markers", icon: "🖊️" },
    { name: "Box cutter", icon: "🔪" },
    { name: "Moving blankets", icon: "🛏️" },
    { name: "Furniture sliders", icon: "⬇️" },
    { name: "Tool kit", icon: "🛠️" },
    { name: "First aid kit", icon: "🩹" },
    { name: "Snacks & water", icon: "💧" },
    { name: "Label stickers", icon: "🏷️" },
    { name: "Box seals", icon: "✉️" },
    { name: "Gloves", icon: "🧤" },
  ];

  const addToCustomBox = (item) => {
    if (!customItems.some((i) => i.name === item.name)) {
      setCustomItems([...customItems, item]);
    }
  };

  const removeFromCustomBox = (item) => {
    setCustomItems(customItems.filter((i) => i.name !== item.name));
  };

  return (
    <div className="home light-theme">
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
            <span>Stress-Free Moving</span>
          </div>
          <h1>
            Move <span className="highlight">Smarter</span> with PicknMove
          </h1>
          <p>
            Custom moving boxes delivered to your door. Choose from our curated
            boxes or build your own with exactly what you need for a perfect
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
              <span>Free Delivery</span>
            </div>
            <div className="feature">
              <span>5-Star Rated</span>
            </div>
            <div className="feature">
              <span>Premium Quality</span>
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
              Select a pre-made box or create your custom moving kit with our
              easy builder
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
              <ul className="box-items">
                {boxOptions.kitchen.items.map((item, index) => (
                  <li key={index}>
                    <span className="check-icon">✅</span> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary">🛒 Select This Box</button>
            </div>

            {/* Custom Box */}
            <div
              className={`box-option custom-box ${
                selectedBox === "custom" ? "selected" : ""
              }`}
              onClick={() => setSelectedBox("custom")}
            >
              <div className="box-header">
                <div className="box-icon">{boxOptions.custom.icon}</div>
                <div className="box-badge">🎯 Fully Custom</div>
              </div>
              <h3>{boxOptions.custom.name}</h3>
              <p className="box-price">Custom Price</p>

              {/* Selected Items */}
              <div className="selected-items">
                <h4>📋 Your Items ({customItems.length})</h4>
                {customItems.length > 0 ? (
                  <div className="custom-items-list">
                    {customItems.map((item, index) => (
                      <div key={index} className="custom-item">
                        <span>
                          {item.icon} {item.name}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCustomBox(item);
                          }}
                          className="remove-btn"
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="empty-message">
                    Tap items below to add to your box ✨
                  </p>
                )}
              </div>

              {/* Available Items */}
              <div className="available-items">
                <h4>📦 Available Items</h4>
                <div className="items-grid">
                  {availableItems.map((item, index) => (
                    <div
                      key={index}
                      className={`item-tag ${
                        customItems.some((i) => i.name === item.name)
                          ? "added"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCustomBox(item);
                      }}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-name">{item.name}</span>
                      {customItems.some((i) => i.name === item.name) && (
                        <span className="checkmark">✅</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="btn-primary"
                disabled={customItems.length === 0}
              >
                🎨 Create Custom Box (${(customItems.length * 4.99).toFixed(2)})
              </button>
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
              Simple steps to your stress-free move
            </p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">1️⃣</div>
              <div className="step-number">01</div>
              <h3>Choose Your Box</h3>
              <p>
                Select from our curated boxes or create your custom moving kit
                with our easy builder
              </p>
            </div>
            <div className="step">
              <div className="step-icon">2️⃣</div>
              <div className="step-number">02</div>
              <h3>We Pack & Deliver</h3>
              <p>
                We carefully pack your selected items and deliver everything to
                your door within 24 hours
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
                <strong>24/7</strong>
                <span>Support</span>
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
                Your custom moving box solution. Move smarter, not harder. 🎯
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
                  <a href="#boxes">🎨 Custom Box</a>
                </li>
                <li>
                  <a href="#boxes">🎁 All Boxes</a>
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
                  <a href="#services">Storage Solutions</a>
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
