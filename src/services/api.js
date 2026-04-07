const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const getToken = () => localStorage.getItem('token');

const authHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${getToken()}`
});

// AUTH
export const signup = (data) =>
  fetch(`${BASE_URL}/api/auth/signup`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json());

export const signin = (data) =>
  fetch(`${BASE_URL}/api/auth/signin`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json());

// USERS
export const getUsers = () => fetch(`${BASE_URL}/api/users`).then(r => r.json());
export const createUser = (data) => fetch(`${BASE_URL}/api/users`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(r => r.json());
export const updateUser = (id, data) => fetch(`${BASE_URL}/api/users/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const deleteUser = (id) => fetch(`${BASE_URL}/api/users/${id}`, { method: "DELETE", headers: authHeaders() }).then(r => r.json());

// PROJECTS
export const getProjects = () => fetch(`${BASE_URL}/api/projects`).then(r => r.json());
export const createProject = (data) => fetch(`${BASE_URL}/api/projects`, { method: "POST", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const updateProject = (id, data) => fetch(`${BASE_URL}/api/projects/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const deleteProject = (id) => fetch(`${BASE_URL}/api/projects/${id}`, { method: "DELETE", headers: authHeaders() }).then(r => r.json());

// SERVICES
export const getServices = () => fetch(`${BASE_URL}/api/services`).then(r => r.json());
export const createService = (data) => fetch(`${BASE_URL}/api/services`, { method: "POST", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const updateService = (id, data) => fetch(`${BASE_URL}/api/services/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const deleteService = (id) => fetch(`${BASE_URL}/api/services/${id}`, { method: "DELETE", headers: authHeaders() }).then(r => r.json());

// REFERENCES
export const getReferences = () => fetch(`${BASE_URL}/api/references`).then(r => r.json());
export const createReference = (data) => fetch(`${BASE_URL}/api/references`, { method: "POST", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const updateReference = (id, data) => fetch(`${BASE_URL}/api/references/${id}`, { method: "PUT", headers: authHeaders(), body: JSON.stringify(data) }).then(r => r.json());
export const deleteReference = (id) => fetch(`${BASE_URL}/api/references/${id}`, { method: "DELETE", headers: authHeaders() }).then(r => r.json());
