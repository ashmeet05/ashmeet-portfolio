import React from "react";
import swimImage from "../assets/swimmeet.jpg";
import saffronImage from "../assets/saffron.png";
import libraryImage from "../assets/library.jpg";

function Projects() {
  return (
    <section className="section projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src={swimImage} alt="SwimMeet Pro" />
          </div>
          <h3>SwimMeet Pro</h3>
          <p className="project-description">
            Designed and developed a console-based event management system for
            organizing swim competitions. Implemented object-oriented architecture
            to manage participants, events, and scoring workflows.
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
            <img src={libraryImage} alt="Library System" />
          </div>
          <h3>Library Management System</h3>
          <p className="project-description">
            Built a database-driven system to manage book inventories, member
            records, and borrowing workflows. Integrated relational schema design
            with structured query operations to ensure efficient data retrieval.
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
            <img src={saffronImage} alt="Saffron Essence" />
          </div>
          <h3>Saffron Essence</h3>
          <p className="project-description">
            Developed a full-stack restaurant ordering system with structured
            frontend-backend communication. Focused on database integration,
            order tracking, and maintaining consistent state updates across components.
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
  );
}

export default Projects;