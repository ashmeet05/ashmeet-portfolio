import React, { useState, useEffect } from "react";
import { getServices } from "../services/api";

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    getServices()
      .then((res) => {
        setServices(Array.isArray(res) ? res : res.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load services.");
        setLoading(false);
      });
  }, []);

  if (loading) return <section className="section services"><h2>Services</h2><p style={{textAlign:"center"}}>Loading...</p></section>;
  if (error) return <section className="section services"><h2>Services</h2><p style={{textAlign:"center"}}>{error}</p></section>;

  return (
    <section className="section services">
      <h2>Services</h2>
      <p className="subtitle">What I can help with</p>
      {services.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--text-secondary)" }}>No services found.</p>
      ) : (
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service._id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Services;