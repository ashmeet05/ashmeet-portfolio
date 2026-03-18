import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../../services/api";

const emptyForm = { firstname: "", lastname: "", email: "", password: "" };

function UsersAdmin() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUsers = () => {
    getUsers().then((res) => {
      setUsers(Array.isArray(res) ? res : res.data || []);
      setLoading(false);
    });
  };

  useEffect(() => { loadUsers(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateUser(editingId, form);
    } else {
      await createUser(form);
    }
    setForm(emptyForm);
    setEditingId(null);
    loadUsers();
  };

  const handleEdit = (user) => {
    setForm({ firstname: user.firstname, lastname: user.lastname, email: user.email, password: "" });
    setEditingId(user._id || user.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await deleteUser(id);
      loadUsers();
    }
  };

  return (
    <section className="section">
      <h2>Manage Users</h2>
      <div className="about-content">
        <div className="contact-form">
          <h3>{editingId ? "Edit User" : "Add User"}</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" placeholder="First Name *" value={form.firstname} onChange={handleChange} required />
            <input type="text" name="lastname" placeholder="Last Name *" value={form.lastname} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password *" value={form.password} onChange={handleChange} required={!editingId} />
            <button type="submit" className="btn">{editingId ? "Update User" : "Add User"}</button>
            {editingId && (
              <button type="button" className="btn" style={{ background: "var(--text-secondary)", marginTop: "0.5rem" }} onClick={() => { setForm(emptyForm); setEditingId(null); }}>Cancel</button>
            )}
          </form>
        </div>
        <div className="about-text">
          <h3>User List</h3>
          {loading ? <p>Loading...</p> : users.length === 0 ? <p>No users yet.</p> : (
            users.map((user) => (
              <div key={user._id || user.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderBottom: "1px solid var(--border)" }}>
                <div>
                  <strong>{user.firstname} {user.lastname}</strong>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{user.email}</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem" }} onClick={() => handleEdit(user)}>Edit</button>
                  <button className="btn" style={{ padding: "6px 16px", fontSize: "0.85rem", background: "#e74c3c" }} onClick={() => handleDelete(user._id || user.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default UsersAdmin;