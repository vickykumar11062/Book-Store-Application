import React from "react";
import "./about.css";
import img from "../../images/book1.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Us</h1>
          <h2>Welcome to <span>BookNest</span></h2>
          <p>
            BookNest is your trusted online bookstore where readers discover 
            and purchase books with ease. From timeless classics to the latest 
            releases, we provide a wide collection that fuels knowledge, 
            imagination, and creativity.
          </p>
          <p className="version">Version 1.0.0</p>
        </div>
        <div className="about-image">
          <img src={img} alt="About BookNest" />
        </div>
      </div>
    </section>
  );
};

export default About;
