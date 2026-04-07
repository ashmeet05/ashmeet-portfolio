import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const sections = [
  { title: 'Projects', description: 'Add, edit, or delete your portfolio projects.', path: '/admin/projects', icon: '💼' },
  { title: 'Services', description: 'Manage the services you offer.', path: '/admin/services', icon: '⚙️' },
  { title: 'References', description: 'Manage your professional references.', path: '/admin/references', icon: '👥' },
  { title: 'Users', description: 'Manage user accounts.', path: '/admin/users', icon: '🔑' },
];

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="section dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p className="subtitle" style={{ marginBottom: 0 }}>
            Welcome back, {user?.firstname} {user?.lastname}
          </p>
        </div>
        <button className="btn logout-btn" onClick={handleLogout}>Sign Out</button>
      </div>

      <div className="dashboard-grid">
        {sections.map((s) => (
          <Link to={s.path} key={s.title} className="dashboard-card">
            <div className="dashboard-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <span className="dashboard-link">Manage →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
