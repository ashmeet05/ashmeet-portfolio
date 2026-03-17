import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="section hero">
      <h1>Hi, I'm Ashmeet Kaur</h1>
      <h2>Software Engineering Student</h2>
      <p>
        I'm currently studying Software Engineering Technology with a focus
        on Artificial Intelligence at Centennial College.
      </p>

      <div className="buttons">
        <Link to="/about" className="btn">About Me</Link>
        <Link to="/projects" className="btn">My Projects</Link>
      </div>

      <div className="info-cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>Building websites using HTML, CSS, JavaScript, and React</p>
        </div>
        <div className="card">
          <h3>Learning AI</h3>
          <p>Exploring machine learning and AI concepts</p>
        </div>
        <div className="card">
          <h3>Always Learning</h3>
          <p>Improving my coding skills through projects</p>
        </div>
      </div>
    </section>
  );
}

export default Home;