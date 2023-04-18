import axios from "axios";

const API_URL = "";

const api = axios.create({
  baseURL: API_URL,
});

// Auth
export const register = async () => {};

export const login = async () => {};

export const logout = async () => {};
// Users
export const fetchUser = async () => {};

export const fetchUsers = async () => {};

export const deleteUser = async () => {};
// Projects
export const createProject = async () => {};

export const fetchProjects = async () => {};

export const fetchProject = async () => {};

export const deleteProject = async () => {};

// Issues
export const createIssue = async () => {};

export const fetchIssues = async () => {};

export const fetchIssuesByProjectId = async () => {};

export const assignIssueToassignee = async () => {};

export const changeIssueStatus = async () => {};

export const changeIssuePriority = async () => {};

/**
 * TODO
 *  Keep your code modular and reusable to allow easy swap in and out of the api implementation/configuration without affecting the rest of the application
 */
