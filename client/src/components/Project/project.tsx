import { Link, useNavigate } from "react-router-dom";
import { api, fetchUser } from "../../client-api/api";
import "./project.css";
import React, { useEffect } from "react";

interface projectProps {
  name: string;
  key: string;
  lead: string;
}

interface Project {
  _id: string;
  name: string;
  key: string;
  type: string;
  user: string;
}

const ProjectComponent: React.FC = () => {
  const [projects, setProjects] = React.useState([]);
  const [user, setUser] = React.useState<object>({});
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigateToProjectPage = useNavigate();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get("project");
      const { data } = response;
      setProjects(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Failed to fetch projects:", error.message);
      }
      throw new Error("Failed to fetch projects");
    }
  };

  const fetchUser = async (id: string): Promise<string> => {
    const res = await api.get(`users/${id}`);
    const { data } = res;
    const { firstName, lastName } = data;
    return firstName + " " + lastName;
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClick = (id: string): void => {
    navigateToProjectPage(`/project/${id}`);
  };

  const mappedProjects = projects.map((project: Project) => {
    const user = fetchUser(project.user);
    return (
      <tr key={project._id} onClick={() => handleClick(project._id)}>
        <td>{project.name}</td>
        <td>{project.key}</td>
        <td>{project.type}</td>
        {/* <td>{user}</td> */}
      </tr>
    );
  });

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Key</th>
          <th>Type</th>
          <th>Lead</th>
        </tr>
      </thead>
      <tbody>{!loading && mappedProjects}</tbody>
    </table>
  );
};

export default ProjectComponent;
