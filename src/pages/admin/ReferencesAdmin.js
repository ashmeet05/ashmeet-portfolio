import React, { useState, useEffect } from "react";
import { getReferences, createReference, updateReference, deleteReference } from "../../services/api";

const emptyForm = { firstname: "", lastname: "", email: "", position: "", company: "" };

function ReferencesAdmin() {
  const [references, setReferences] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadReferences = () => {
    getReferences().then((res) => {
      setReferences(Array.isArray(res) ? res : res.data || []);
      setLoading(false);
    });
  };

  useEffect(() => { loadReferences(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateReference(editingId, form);
    } else {
      await createReference(form);
    }
    setForm(emptyForm);
    setEditingId(null);
    loadReferences();
  };

  const handleEdit = (ref) => {
    setForm({ firstname: ref.firstname, lastname: ref.lastname, email: ref.email, position: ref.position, company: ref.company });
    setEditingId(ref._id || ref.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this contact?")) {
      await deleteReference(id);
      loadReferences();
    }
  };

  return (
    <section className="section">
      <h2>Manage Contacts</h2>
      <div className="about-content">
        <div className="contact-form">
          <h3>{editingId ? "Edit Contact" : "Add Contact"}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name *" value={form.firstname} onChange={handleChange} required />
            <input type="text" name="lastname" placeholder="Last Name *" value={form.lastname} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required />
            <input type="text" name="position" placeholder="Position" value={form.position} onChange={handleChange} />
            <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange} />
            <button type="submit" className="btn">{editingId ? "Update Contact" : "Add Contact"}</button>
            {editingId && (
              <button type="button" className="btn" style={{ background: "var(--text-secondary)", marginTop: "0.5rem" }} onClick={() => { setForm(emptyForm); setEditingId(null); }}>Cancel</button>
            )}
          </form>
        </div>
        <div className="about-text">
          <h3>Contact List</h3>
          {loading ? <p>Loading...</p> : references.length === 0 ? <p>No contacts yet.</p> : (
            references.map((ref) => (
              <div key={ref._id || ref.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <strong>{ref.firstname} {ref.lastname}</strong>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{ref.email} — {ref.position} @ {ref.company}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem" }} onClick={() => handleEdit(ref)}>Edit</button>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem", background: "#e74c3c" }} onClick={() => handleDelete(ref._id || ref.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default ReferencesAdmin;