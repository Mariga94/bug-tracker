import { Link, useParams } from "react-router-dom";
import { api } from "../client-api/api";
import { useEffect } from "react";
import React from "react";
import "./issueListPage.css";

interface Issue {
  _id: string;
  name: string;
  key: string;
  type: string;
  user: string;
  shortDesc: string;
  assignee: string;
  reporter: string;
  priority: string;
  status: string;
  created: string;
  dueDate: string;
}

const IssueListPage: React.FC = () => {
  const [issues, setIssues] = React.useState([]);
  const [projectName, setProjectName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  const fetchProject = async (id: string | undefined) => {
    const res = await api.get(`project/${id}`);
    const { name } = res.data;
    setProjectName(name);
  };
  const fetchIssuesByProjectId = async (
    projectId: string | undefined
  ): Promise<void> => {
    try {
      setLoading(true);
      const res = await api.get(`projects/${projectId}/issues`);
      const data = res.data;
      setLoading(false);
      setIssues(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Cannot fetch issues: ${error.message}`);
      }
      throw Error("Cannot fetch Issues from the project Id");
    }
  };

  const fetchUser = async (id: string) => {
    try {
      const res = await api.get(`users/${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIssuesByProjectId(id);
    fetchProject(id);
  }, [id]);

  const mappedIssues = issues.map(async (issue: Issue) => {
    const user = await fetchUser(issue.user);
    const name = user.fistName + user.lastName;
    const data = (
      <tr key={issue._id}>
        <td>{issue.type ? issue.type : "Not provided"}</td>
        <td>{issue.key ? issue.key : "Not provided"}</td>
        <td>{issue.shortDesc}</td>
        <td>{issue.assignee ? issue.assignee : "Unassigned"}</td>
        <td>{name}</td>
        <td>{issue.priority}</td>
        <td>{issue.status}</td>
        <td>{issue.created}</td>
        <td>{issue.dueDate}</td>
      </tr>
    );
    return data;
  });
  console.log(issues)
  console.log(mappedIssues)
  return (
    <div className="issue-container">
      <div className="breadcrumbs">
        <Link to="/projects">Projects</Link> / <span>{projectName}</span>
      </div>
      <h2>Issues</h2>

      <table className="issues-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Key</th>
            <th>Summary</th>
            <th>Assignee</th>
            <th>Reporter</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
};

export default IssueListPage;
