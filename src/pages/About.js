import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Jarurat Care</h1>
        <p>
          Jarurat Care is a comprehensive patient management system designed to
          streamline healthcare operations and improve patient care. Our
          platform provides healthcare professionals with efficient tools to
          manage patient records, track medical history, and ensure timely
          access to critical information.
        </p>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To empower healthcare providers with innovative technology solutions
            that enhance patient care, improve efficiency, and transform the
            healthcare experience for both providers and patients.
          </p>
        </div>

        <div className="features-list">
          <h2>Key Features</h2>
          <ul>
            <li>Secure patient record management</li>
            <li>Easy search and filtering capabilities</li>
            <li>Responsive design for all devices</li>
            <li>Real-time patient data access</li>
            <li>Intuitive user interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
