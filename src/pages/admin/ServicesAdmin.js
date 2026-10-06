import React, { useState, useEffect } from "react";
import { getServices, createService, updateService, deleteService } from "../../services/api";

const emptyForm = { title: "", description: "" };

function ServicesAdmin() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = () => {
    getServices().then((res) => {
      setServices(Array.isArray(res) ? res : res.data || []);
      if (res && res.success === false) setError(res.message || "Could not load data.");
      setLoading(false);
    });
  };

  useEffect(() => { loadServices(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = editingId ? await updateService(editingId, form) : await createService(form);
    if (!res || res.success === false) {
      setError((res && res.message) || "Could not save. Please try again.");
      return;
    }
    setError("");
    setForm(emptyForm);
    setEditingId(null);
    loadServices();
  };

  const handleEdit = (service) => {
    setForm({ title: service.title, description: service.description });
    setEditingId(service._id || service.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this service?")) {
      const res = await deleteService(id);
      if (!res || res.success === false) {
        setError((res && res.message) || "Could not delete. Please try again.");
        return;
      }
      setError("");
      loadServices();
    }
  };

  return (
    <section className="section">
      <h2>Manage Services</h2>
      {error && <p role="alert" style={{ color: "#e74c3c", marginBottom: "1rem" }}>{error}</p>}
      <div className="about-content">
        <div className="contact-form">
          <h3>{editingId ? "Edit Service" : "Add Service"}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Service Title *" value={form.title} onChange={handleChange} required />
            <textarea name="description" placeholder="Description *" rows="4" value={form.description} onChange={handleChange} required style={{ padding: "0.9rem", border: "2px solid var(--border)", borderRadius: "8px", fontFamily: "inherit", fontSize: "1rem", resize: "vertical" }} />
            <button type="submit" className="btn">{editingId ? "Update Service" : "Add Service"}</button>
            {editingId && (
              <button type="button" className="btn" style={{ background: "var(--text-secondary)", marginTop: "0.5rem" }} onClick={() => { setForm(emptyForm); setEditingId(null); }}>Cancel</button>
            )}
          </form>
        </div>
        <div className="about-text">
          <h3>Service List</h3>
          {loading ? <p>Loading...</p> : services.length === 0 ? <p>No services yet.</p> : (
            services.map((service) => (
              <div key={service._id || service.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <strong>{service.title}</strong>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{service.description?.substring(0, 60)}...</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem" }} onClick={() => handleEdit(service)}>Edit</button>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem", background: "#e74c3c" }} onClick={() => handleDelete(service._id || service.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ServicesAdmin;