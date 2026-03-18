import React, { useState, useEffect } from "react";
import { getProjects, createProject, updateProject, deleteProject } from "../../services/api";

const emptyForm = { title: "", description: "", completion: "" };

function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProjects = () => {
    getProjects().then((res) => {
      setProjects(Array.isArray(res) ? res : res.data || []);
      setLoading(false);
    });
  };

  useEffect(() => { loadProjects(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateProject(editingId, form);
    } else {
      await createProject(form);
    }
    setForm(emptyForm);
    setEditingId(null);
    loadProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      completion: project.completion ? project.completion.substring(0, 10) : "",
    });
    setEditingId(project._id || project.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this project?")) {
      await deleteProject(id);
      loadProjects();
    }
  };

  return (
    <section className="section">
      <h2>Manage Projects</h2>
      <div className="about-content">
        <div className="contact-form">
          <h3>{editingId ? "Edit Project" : "Add Project"}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Project Title *" value={form.title} onChange={handleChange} required />
            <input type="date" name="completion" value={form.completion} onChange={handleChange} />
            <textarea name="description" placeholder="Description *" rows="4" value={form.description} onChange={handleChange} required style={{ padding: "0.9rem", border: "2px solid var(--border)", borderRadius: "8px", fontFamily: "inherit", fontSize: "1rem", resize: "vertical" }} />
            <button type="submit" className="btn">{editingId ? "Update Project" : "Add Project"}</button>
            {editingId && (
              <button type="button" className="btn" style={{ background: "var(--text-secondary)", marginTop: "0.5rem" }} onClick={() => { setForm(emptyForm); setEditingId(null); }}>Cancel</button>
            )}
          </form>
        </div>
        <div className="about-text">
          <h3>Project List</h3>
          {loading ? <p>Loading...</p> : projects.length === 0 ? <p>No projects yet.</p> : (
            projects.map((project) => (
              <div key={project._id || project.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <strong>{project.title}</strong>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{project.description?.substring(0, 60)}...</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem" }} onClick={() => handleEdit(project)}>Edit</button>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem", background: "#e74c3c" }} onClick={() => handleDelete(project._id || project.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsAdmin;