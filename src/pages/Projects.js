import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import swimImage from "../assets/swimmeet.jpg";
import saffronImage from "../assets/saffron.png";
import libraryImage from "../assets/library.jpg";

const fallbackImages = [swimImage, libraryImage, saffronImage];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(Array.isArray(res) ? res : res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load projects.");
        setLoading(false);
      });
  }, []);

  if (loading) return <section className="section projects"><h2>My Projects</h2><p style={{textAlign:"center"}}>Loading...</p></section>;
  if (error) return <section className="section projects"><h2>My Projects</h2><p style={{textAlign:"center"}}>{error}</p></section>;

  return (
    <section className="section projects">
      <h2>My Projects</h2>
      {projects.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>No projects found.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project._id}>
              <div className="project-image">
                <img src={fallbackImages[index % fallbackImages.length]} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.completion && (
                <p className="tech-stack">
                  <strong>Completed:</strong> {new Date(project.completion).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;