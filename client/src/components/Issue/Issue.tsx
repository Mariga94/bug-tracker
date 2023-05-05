import { ChangeEvent, useEffect, useState } from "react";
import "./Issue.css";
import React from "react";
import { api } from "../../client-api/api";

interface AddIssueProps {
  handleCancel: () => void;
}
const AddIssue: React.FC<AddIssueProps> = (props) => {
  const [projects, setProjects] = React.useState([]);
  const [formData, setFormData] = useState({
    project: "",
    issueType: "",
    status: "",
    shortDesc: "",
    longDesc: "",
    priority: "",
    timeline: "",
    dueDate: "",
    assignee: "",
    showForm: false,
  });

  const fetchProjects = async () => {
    try {
  
      const response = await api.get("project");
      const { data } = response;
      setProjects(data);  
    } catch (error) {
      if (error instanceof Error) {
        console.log("Failed to fetch projects:", error.message);
      }
      throw new Error("Failed to fetch projects");
    }
  };
  console.table(projects)
  useEffect(()=>{
    fetchProjects()
  },[])
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <form action="" className="issue">
      <h2>Create Issue</h2>
      <div className="form-group">
        <label htmlFor="project" className="form-label">
          Project
        </label>
        <input
          type="text"
          id="project"
          className="form-input"
          name="project"
          value={formData.project}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="issueType" id="issueType" className="form-label">
          Issue Type
        </label>
        <select
          className="form-input"
          id="issueType"
          value={formData.issueType}
          name="issueType"
          onChange={handleChange}
        >
          <option value="">--Select Issue Type--</option>
          <option value="Bug">Bug</option>
          <option value="Improvement">Improvement</option>
          <option value="Task">Task</option>
          <option value="New feature">New Feature</option>
          <option value="To do">To Do</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="status" id="status" className="form-label">
          Status
        </label>
        <select
          className="form-input"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">--Select Status--</option>
          <option value="Open">Open</option>
          <option value="In progress">In progress</option>
          <option value="In Review">In Review</option>
          <option value="New feature">New Feature</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="longDesc" id="longDesc" className="form-label">
          Description
        </label>

        <textarea id="longDesc" className="form-input"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="priority" id="priority" className="form-label">
          Priority
        </label>
        <select
          className="form-input"
          id="priority"
          value={formData.status}
          name="status"
          onChange={handleChange}
        >
          <option value="">--Select Status--</option>
          <option value="Highest">Highest</option>
          <option value="HIgh">High</option>
          <option value="Low">Low</option>
          <option value="Lowest">Lowest</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate" id="dueDate" className="form-label">
          Due date
        </label>
        <input
          type="date"
          id="dueDate"
          className="form-input"
          value={formData.dueDate}
          name="dueDate"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="assignee" id="assignee" className="form-label">
          Assignee
        </label>
        <select
          className="form-input"
          id="assignee"
          value={formData.assignee}
          name="assignee"
          onChange={handleChange}
        >
          <option value="">--Assignee--</option>
        </select>
      </div>

      <div className="button-issue-group">
        <button className="cancel-button" onClick={props.handleCancel}>
          Cancel
        </button>
        <button className="create-button" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </form>
  );
};

export default AddIssue;
