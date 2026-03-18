import React, { useState } from "react";
import { createReference } from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    position: "",
    company: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReference(formData);
      setStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", position: "", company: "" });
    } catch {
      setStatus("error");
    }
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
          {status === "success" && <p style={{ color: "green", marginBottom: "1rem" }}>Message sent successfully!</p>}
          {status === "error" && <p style={{ color: "red", marginBottom: "1rem" }}>Something went wrong. Please try again.</p>}
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name *" value={formData.firstname} onChange={handleChange} required />
            <input type="text" name="lastname" placeholder="Last Name *" value={formData.lastname} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
            <input type="text" name="position" placeholder="Your Position" value={formData.position} onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;