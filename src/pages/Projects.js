import React, { useState, useEffect, useMemo, memo } from "react";
import { getProjects } from "../services/api";
import swimImage from "../assets/swimmeet.jpg";
import saffronImage from "../assets/saffron.png";
import libraryImage from "../assets/library.jpg";
import saffronEssenceImage from "../assets/saffron-essence.jpg";

// Links for the featured project. Update LIVE_URL if Render gives a different address.
const SAFFRON = {
  LIVE_URL: "https://saffron-essence.onrender.com",
  CODE_URL: "https://github.com/ashmeet05/saffron-essence"
};

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

// Always shown at the top of the page (it doesn't depend on the database)
function FeaturedProject() {
  const tech = ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript", "HTML & CSS", "Leaflet maps", "JWT auth", "Render"];
  return (
    <article className="featured-project" aria-labelledby="featured-title">
      <a className="featured-image" href={SAFFRON.LIVE_URL} target="_blank" rel="noopener noreferrer">
        <img src={saffronEssenceImage} alt="Saffron Essence home page: green and saffron-yellow restaurant website with a table of Indian dishes" width="1200" height="750" />
      </a>
      <div className="featured-body">
        <p className="featured-label">Featured project · Full stack</p>
        <h3 id="featured-title">Saffron Essence: online ordering for an Indian restaurant</h3>
        <p>
          A complete takeout website for a restaurant with 8 locations across Ontario. Customers browse a
          52-dish menu, order for pickup or delivery, and track their order live. Restaurant staff get a
          dashboard where new orders appear and move from <em>Preparing</em> to <em>Ready</em>.
        </p>
        <ul className="featured-points">
          <li><strong>Pickup or delivery:</strong> delivery-area check by city, $20 minimum, fees and tips</li>
          <li><strong>Server-side checks:</strong> prices, opening hours and delivery areas are verified by the API, never trusted from the browser</li>
          <li><strong>Accounts and security:</strong> bcrypt-hashed passwords, JWT sign-in, rate limits and a Content Security Policy</li>
          <li><strong>Interactive map:</strong> find the nearest location by city or GPS</li>
        </ul>
        <ul className="tech-tags" aria-label="Technologies used">
          {tech.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <div className="featured-actions">
          <a className="btn" href={SAFFRON.LIVE_URL} target="_blank" rel="noopener noreferrer">View live site</a>
          <a className="btn btn-outline-dark" href={SAFFRON.CODE_URL} target="_blank" rel="noopener noreferrer">View code on GitHub</a>
        </div>
        <p className="featured-note">The live site runs on a free server, so the first visit can take up to a minute to load.</p>
      </div>
    </article>
  );
}

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

  return (
    <section className="section projects">
      <h2>My Projects</h2>
      <p className="subtitle">A selection of work I've built and contributed to</p>
      <FeaturedProject />
      {/* Projects saved in the portfolio database. Hidden if the database can't be reached. */}
      {!loading && !error && projects.length > 0 && (
        <>
          <h3 className="more-projects">More projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || project.id}
                project={project}
                image={fallbackImages[index % fallbackImages.length]}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Projects;
