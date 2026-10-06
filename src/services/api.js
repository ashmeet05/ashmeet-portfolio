const BASE_URL = (process.env.REACT_APP_API_URL || "http://localhost:5000").replace(/\/$/, "");

const getToken = () => localStorage.getItem("token");

// One place for every API call: adds the login token, turns network
// failures into a normal { success: false } answer, and signs the user
// out if their session has expired.
async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (auth && token) headers.Authorization = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    return { success: false, message: "Can't reach the server. Please try again later." };
  }

  let data;
  try {
    data = await res.json();
  } catch (err) {
    data = { success: res.ok, message: res.ok ? "" : `Request failed (${res.status}).` };
  }

  if (res.status === 401 && auth && token) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.assign("/signin");
  }

  return data;
}

// AUTH
export const signup = (data) => request("/api/auth/signup", { method: "POST", body: data });
export const signin = (data) => request("/api/auth/signin", { method: "POST", body: data });

// USERS (admin only, except your own account)
export const getUsers = () => request("/api/users", { auth: true });
export const createUser = (data) => request("/api/users", { method: "POST", body: data, auth: true });
export const updateUser = (id, data) => request(`/api/users/${encodeURIComponent(id)}`, { method: "PUT", body: data, auth: true });
export const deleteUser = (id) => request(`/api/users/${encodeURIComponent(id)}`, { method: "DELETE", auth: true });

// PROJECTS (public to read, admin to change)
export const getProjects = () => request("/api/projects");
export const createProject = (data) => request("/api/projects", { method: "POST", body: data, auth: true });
export const updateProject = (id, data) => request(`/api/projects/${encodeURIComponent(id)}`, { method: "PUT", body: data, auth: true });
export const deleteProject = (id) => request(`/api/projects/${encodeURIComponent(id)}`, { method: "DELETE", auth: true });

// SERVICES (public to read, admin to change)
export const getServices = () => request("/api/services");
export const createService = (data) => request("/api/services", { method: "POST", body: data, auth: true });
export const updateService = (id, data) => request(`/api/services/${encodeURIComponent(id)}`, { method: "PUT", body: data, auth: true });
export const deleteService = (id) => request(`/api/services/${encodeURIComponent(id)}`, { method: "DELETE", auth: true });

// REFERENCES (admin only)
export const getReferences = () => request("/api/references", { auth: true });
export const createReference = (data) => request("/api/references", { method: "POST", body: data, auth: true });
export const updateReference = (id, data) => request(`/api/references/${encodeURIComponent(id)}`, { method: "PUT", body: data, auth: true });
export const deleteReference = (id) => request(`/api/references/${encodeURIComponent(id)}`, { method: "DELETE", auth: true });
