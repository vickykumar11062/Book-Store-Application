import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");

    // reset form after submit
    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact-ways">
        <div className="address contact-section">
          <i className="bi bi-house-fill"></i>
          <h2>Address</h2>
          <p>Jodhpur, Rajasthan</p>
        </div>

        <div className="phone-call contact-section">
          <i className="bi bi-telephone-fill"></i>
          <h2>Phone</h2>
          <p>+91 9128634469</p>
        </div>

        <div className="email contact-section">
          <i className="bi bi-envelope-fill"></i>
          <h2>Email</h2>
          <p>example@email.com</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Contact Us Form</h2>
        <div className="name-subject-mail">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject *"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          required
          name="message"
          id="contact-message"
          cols="30"
          rows="5"
          placeholder="Your message *"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button className="contact-send-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
