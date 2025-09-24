import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Jarurat Care</h1>
        <p>
          Your trusted partner in patient management and healthcare solutions
        </p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>Patient Management</h3>
          <p>Efficiently manage patient records and medical history</p>
        </div>
        <div className="feature-card">
          <h3>Easy Access</h3>
          <p>Quick access to patient information when you need it most</p>
        </div>
        <div className="feature-card">
          <h3>Secure & Reliable</h3>
          <p>Your patient data is safe and secure with us</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
