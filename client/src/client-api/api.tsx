import axios, { AxiosResponse } from "axios";
import { getLocalStorage } from "../utils/localstorage";
const API_URL = "http://localhost:3000/api/v1/";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

interface AuthArgs {
  email: String;
  password: String;
}

// Auth
export const signup = async ({ email, password }: AuthArgs) => {
  try {
    const response = await api.post("auth/register", { email, password });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const login = async ({ email, password }: AuthArgs) => {
  try {
    const response = await api.post("auth/login", { email, password });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const logout = async () => {
  const response = await api.post("auth/logout");
  localStorage.setItem("currentUser", null!);
};
// Users
export const fetchUser = async () => {
  const res = await api.get(`users/${getLocalStorage}`);
  console.log(res)
};


export const fetchUsers = async () => {};

export const deleteUser = async () => {};

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
