import React from "react";
import profilePhoto from "../assets/profile-photo.jpg";
import resume from "../assets/resume.pdf";

function About() {
  return (
    <section className="section about">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="profile">
          <img src={profilePhoto} alt="Ashmeet Kaur" className="profile-photo" />
          <h3>Ashmeet Kaur</h3>
          <p>Software Engineering Technology - AI</p>
          <p>Expected 2027 | GPA: 3.6/4.0</p>
          <a href={resume} download className="btn">Download Resume</a>
        </div>

        <div className="about-text">
          <h3>About Me</h3>
          <p>
            Hi, I'm Ashmeet. I'm currently studying Software Engineering
            Technology with a focus on Artificial Intelligence. I enjoy building
            practical applications and turning ideas into structured, working systems.
          </p>
          <p>
            I've worked on projects ranging from database-driven applications
            to full-stack web platforms using HTML, CSS, React, and SQL. I'm
            especially interested in writing clean, maintainable code and
            continuously improving how I design software.
          </p>
          <p>
            I'm always open to learning new technologies and collaborating on
            projects that challenge me to grow as a developer.
          </p>

          <h3>Skills</h3>
          <p><strong>Languages:</strong> Python, Java, C#, JavaScript, SQL, HTML5, CSS3</p>
          <p><strong>Tools:</strong> React, Git, VS Code, PostgreSQL</p>
        </div>
      </div>
    </section>
  );
}

export default About;