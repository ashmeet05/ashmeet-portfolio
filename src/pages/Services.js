import React from "react";

function Services() {
  return (
    <section className="section services">
      <h2>Services</h2>
      <p className="subtitle">What I can help with</p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Web Application Development</h3>
          <p>
            Design and development of responsive web applications using React,
            modern CSS, and structured frontend architecture. Focused on
            usability, maintainability, and clean UI patterns.
          </p>
        </div>
        <div className="service-card">
          <h3>Backend & API Integration</h3>
          <p>
            Development of structured backend logic and integration with databases
            using REST principles. Experience working with C#, SQL, and relational
            data modeling.
          </p>
        </div>
        <div className="service-card">
          <h3>Database Design</h3>
          <p>
            Designing relational database schemas, implementing CRUD operations,
            and ensuring efficient data retrieval using SQL and normalized structures.
          </p>
        </div>
        <div className="service-card">
          <h3>Technical Tutoring</h3>
          <p>
            Assisting students with programming fundamentals including Python,
            Java, C#, and SQL. Emphasis on clarity and problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;