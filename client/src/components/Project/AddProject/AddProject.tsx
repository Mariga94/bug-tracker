import React, { ChangeEvent } from "react";
import "./AddProject.css";
import { api } from "../../../client-api/api";

interface ProjectArgs {
  name: string;
  key: string;
  type: string;
}

const AddProject: React.FC = () => {
  const [projectForm, setProjectForm] = React.useState({
    name: "",
    key: "",
    type: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProjectForm((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const createProject = async ({ name, key, type }: ProjectArgs) => {
    try {
      const res = await api.post("project", { name, key, type });
      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      console.log("Failed to create project")
    }
  };

  const handleSubmit = () => {
    createProject(projectForm);
  };

  console.log(projectForm);
  return (
    <div className="add-project">
      <h2 className="add-project__title">Add Project details</h2>
      <form className="add-project__form">
        <div className="add-project__form-group">
          <label htmlFor="name" id="name" className="add-project__label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={projectForm.name}
            onChange={handleChange}
            className="add-project__input"
            placeholder="Bug tracker"
            required
          />
        </div>
        <div className="add-project__form-group">
          <label htmlFor="key" id="key" className="add-project__label">
            Key
          </label>
          <input
            id="key"
            type="text"
            name="key"
            value={projectForm.key}
            onChange={handleChange}
            className="add-project__input"
            placeholder="B.T"
            required
          />
        </div>
        <div className="add-project__form-group">
          <label htmlFor="type" id="type" className="add-project__label">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={projectForm.type}
            onChange={handleChange}
            className="add-project__input"
            required
          >
            <option value="">--Select Type--</option>
            <option value="Company">Company</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
          </select>
        </div>
        <div>
          <div className="add-project__buttons">
            <button className="add-project__button add-project__button-cancel">
              Cancel
            </button>
            <button
              className="add-project__button add-project__button-create"
              onClick={handleSubmit}
            >
              Create project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
