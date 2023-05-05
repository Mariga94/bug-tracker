import { Link } from "react-router-dom";
import ProjectComponent from "../components/Project/project";
import "./ProjectPage.css";
const Project = () => {
  return (
    <div className="project-page">
      <div className="project-page__header">
        <h2 className="project-page__title">Projects</h2>
        <Link to="/add-project">
        <button className="project-page__button">Create Project</button>
        </Link>
      </div>
      <div className="project-component">
        <ProjectComponent />
      </div>
    </div>
  );
};

export default Project;
