import React, { useState, useEffect, useMemo, memo } from "react";
import { getProjects } from "../services/api";
import swimImage from "../assets/swimmeet.jpg";
import saffronImage from "../assets/saffron.png";
import libraryImage from "../assets/library.jpg";

const fallbackImages = [swimImage, libraryImage, saffronImage];

const ProjectCard = memo(function ProjectCard({ project, image }) {
  const completionDate = useMemo(
    () => project.completion ? new Date(project.completion).toLocaleDateString() : null,
    [project.completion]
  );

  return (
    <div className="project-card">
      <div className="project-image">
        <img
          src={image}
          alt={project.title}
          loading="lazy"
          width="400"
          height="250"
        />
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {completionDate && (
        <p className="tech-stack">
          <strong>Completed:</strong> {completionDate}
        </p>
      )}
    </div>
  );
});

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

  if (loading) return (
    <section className="section projects">
      <h2>My Projects</h2>
      <p className="subtitle">Loading projects...</p>
    </section>
  );

  if (error) return (
    <section className="section projects">
      <h2>My Projects</h2>
      <p className="subtitle">{error}</p>
    </section>
  );

  return (
    <section className="section projects">
      <h2>My Projects</h2>
      <p className="subtitle">A selection of work I've built and contributed to</p>
      {projects.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>No projects found.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              project={project}
              image={fallbackImages[index % fallbackImages.length]}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
