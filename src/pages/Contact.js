import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="section contact">
      <h2>Get In Touch</h2>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info-item">
            <h4>Email</h4>
            <a href="mailto:ashmeetk059@gmail.com">ashmeetk059@gmail.com</a>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <a href="tel:+14372550245">(437) 255-0245</a>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Toronto, Ontario</p>
          </div>
          <div className="info-item">
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/ashmeet-kaur-667b45320" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/ashmeetkaur
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message *" rows="6" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;