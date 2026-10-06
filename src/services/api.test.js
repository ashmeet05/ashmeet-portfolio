import { getProjects, createProject, signin } from "./api";

const mockFetch = (status, body) =>
  jest.fn().mockResolvedValue({ ok: status < 400, status, json: () => Promise.resolve(body) });

beforeEach(() => {
  localStorage.clear();
});

test("public requests do not send the login token", async () => {
  localStorage.setItem("token", "abc");
  global.fetch = mockFetch(200, { success: true, data: [] });
  await getProjects();
  const [url, opts] = global.fetch.mock.calls[0];
  expect(url).toBe("http://localhost:5000/api/projects");
  expect(opts.headers.Authorization).toBeUndefined();
});

test("admin requests send the login token", async () => {
  localStorage.setItem("token", "abc");
  global.fetch = mockFetch(201, { success: true });
  await createProject({ title: "x" });
  expect(global.fetch.mock.calls[0][1].headers.Authorization).toBe("Bearer abc");
});

test("server errors come back as a readable message", async () => {
  localStorage.setItem("token", "abc");
  global.fetch = mockFetch(403, { success: false, message: "You do not have permission to do this." });
  const res = await createProject({ title: "x" });
  expect(res.success).toBe(false);
  expect(res.message).toMatch(/permission/);
});

test("a network failure does not crash the page", async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error("offline"));
  const res = await signin({ email: "a@b.co", password: "x" });
  expect(res.success).toBe(false);
  expect(res.message).toMatch(/server/i);
});

test("an expired session signs the user out", async () => {
  localStorage.setItem("token", "old");
  localStorage.setItem("user", "{}");
  delete window.location;
  window.location = { assign: jest.fn() };
  global.fetch = mockFetch(401, { success: false, message: "expired" });
  await createProject({ title: "x" });
  expect(localStorage.getItem("token")).toBeNull();
  expect(window.location.assign).toHaveBeenCalledWith("/signin");
});
