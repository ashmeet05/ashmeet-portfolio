import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <img src="/assets/logo.png" alt="Logo" />
            <span>Ashmeet Kaur</span>
          </a>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="section hero">
        <h1>Hi, I'm Ashmeet Kaur</h1>
        <h2>Software Engineering Student</h2>
        <p>
          I'm currently studying Software Engineering Technology with a focus
          on Artificial Intelligence at Centennial College.
        </p>

        <div className="buttons">
          <a href="#about" className="btn">About Me</a>
          <a href="#projects" className="btn">My Projects</a>
        </div>

        <div className="info-cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Building websites using HTML, CSS, JavaScript, and React</p>
          </div>

          <div className="card">
            <h3> Learning AI</h3>
            <p>Exploring machine learning and AI concepts</p>
          </div>

          <div className="card">
            <h3> Always Learning</h3>
            <p>Improving my coding skills through projects</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="profile">
            <img
              src="/assets/profile-photo.jpg"
              alt="Ashmeet Kaur"
              className="profile-photo"
            />
            <h3>Ashmeet Kaur</h3>
            <p>Software Engineering Technology - AI</p>
            <p>Expected 2027 | GPA: 3.6/4.0</p>
            <a
              href="/assets/resume.pdf"
              download
              className="btn"
            >
              Download Resume
            </a>
          </div>

          <div className="about-text">
            <h3>About Me</h3>

<p>
  Hi, I’m Ashmeet. I’m currently studying Software Engineering Technology
  with a focus on Artificial Intelligence. I enjoy building practical
  applications and turning ideas into structured, working systems.
</p>

<p>
  I’ve worked on projects ranging from database-driven applications
  to full-stack web platforms using HTML, CSS, React, and SQL.
  I’m especially interested in writing clean, maintainable code
  and continuously improving how I design software.
</p>

<p>
  I’m always open to learning new technologies and collaborating
  on projects that challenge me to grow as a developer.
</p>


            <h3>Skills</h3>
            <p>
              <strong>Languages:</strong> Python, Java, C#, JavaScript, SQL, HTML5, CSS3
            </p>
            <p>
              <strong>Tools:</strong> React, Git, VS Code, PostgreSQL
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects">
        <h2>My Projects</h2>

        <div className="projects-grid">

  <div className="project-card">
    <div className="project-image">
      <img src="/assets/swimeet.jpg" alt="SwimMeet Pro" />
    </div>

    <h3>SwimMeet Pro</h3>

    <p className="project-description">
      Designed and developed a console-based event management system for organizing swim competitions. 
      Implemented object-oriented architecture to manage participants, events, and scoring workflows. 
      Focused on modular design, data validation, and clean separation of responsibilities.
    </p>

    <ul className="project-points">
      <li>Led development using C# and Python</li>
      <li>Applied OOP principles and structured data models</li>
      <li>Implemented event scheduling and score tracking logic</li>
    </ul>

    <p className="tech-stack"><strong>Tech Stack:</strong> C#, Python, OOP</p>
  </div>


  <div className="project-card">
    <div className="project-image">
      <img src="/assets/library.jpg" alt="Library System" />
    </div>

    <h3>Library Management System</h3>

    <p className="project-description">
      Built a database-driven system to manage book inventories, member records, and borrowing workflows. 
      Integrated relational schema design with structured query operations to ensure efficient data retrieval.
    </p>

    <ul className="project-points">
      <li>Designed relational database schema</li>
      <li>Implemented CRUD operations using SQL & Java</li>
      <li>Handled user authentication and validation logic</li>
    </ul>

    <p className="tech-stack"><strong>Tech Stack:</strong> Java, SQL, JDBC</p>
  </div>


  <div className="project-card">
    <div className="project-image">
      <img src="/assets/saffron.png" alt="Saffron Essence" />
    </div>

    <h3>Saffron Essence</h3>

    <p className="project-description">
      Developed a full-stack restaurant ordering system with structured frontend-backend communication. 
      Focused on database integration, order tracking, and maintaining consistent state updates across components.
    </p>

    <ul className="project-points">
      <li>Built interactive UI components using JavaScript</li>
      <li>Connected backend services using C# and SQL</li>
      <li>Managed order workflows and data persistence</li>
    </ul>

    <p className="tech-stack"><strong>Tech Stack:</strong> JavaScript, C#, SQL</p>
  </div>

</div>

      </section>

      {/* SERVICES */}
      <section id="services" className="section services">
        <h2>Services</h2>
        <p className="subtitle">What I can help with</p>
<div className="services-grid">

  <div className="service-card">
    <h3>Web Application Development</h3>
    <p>
      Design and development of responsive web applications using
      React, modern CSS, and structured frontend architecture.
      Focused on usability, maintainability, and clean UI patterns.
    </p>
  </div>

  <div className="service-card">
    <h3>Backend & API Integration</h3>
    <p>
      Development of structured backend logic and integration with
      databases using REST principles. Experience working with
      C#, SQL, and relational data modeling.
    </p>
  </div>

  <div className="service-card">
    <h3>Database Design</h3>
    <p>
      Designing relational database schemas, implementing CRUD
      operations, and ensuring efficient data retrieval using SQL
      and normalized structures.
    </p>
  </div>

  <div className="service-card">
    <h3>Technical Tutoring</h3>
    <p>
      Assisting students with programming fundamentals including
      Python, Java, C#, and SQL. Emphasis on clarity and problem-solving.
    </p>
  </div>

</div>

       
      
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="info-item">
              <h4>Email</h4>
             <a href="mailto:ashmeetk059@gmail.com">
  ashmeetk059@gmail.com
</a>

            </div>

            <div className="info-item">
              <h4>Phone</h4>
             <a href="tel:+14372550245">
  (437) 255-0245
</a>

            </div>

            <div className="info-item">
              <h4>Location</h4>
              <p>Toronto, Ontario</p>
            </div>

            <div className="info-item">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ashmeet-kaur-667b45320" target="_blank" rel="noopener noreferrer">linkedin.com/in/ashmeetkaur</a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Ashmeet Kaur</h3>
        <p>Software Engineering Technology - AI Student</p>
        <p>© 2027 Ashmeet Kaur. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
