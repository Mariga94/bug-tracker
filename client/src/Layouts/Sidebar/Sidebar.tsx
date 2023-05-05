import projectLogo from "../../assets/images/logo/icons8-project-64.png";
import "./Sidebar.css";
const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar--title">
        <img src={projectLogo} alt="" className="sidebar--logo" />
        <h4>Project Name</h4>
      </div>
      <ul className="sidebar--menu">
        <h4>Filters</h4>
        <li className="sidebar--menu--item"></li>
        <li className="sidebar--menu--item">All issues</li>
        <li className="sidebar--menu--item">My open issues</li>
        <li className="sidebar--menu--item">Reported by me</li>
        <li className="sidebar--menu--item">Open issues</li>
        <li className="sidebar--menu--item">Done issues</li>
        <li className="sidebar--menu--item">Issues in progress</li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;
