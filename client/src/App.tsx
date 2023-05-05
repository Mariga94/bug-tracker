import React, { Children, useState } from "react";
import {
  Outlet,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";

// Pages
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import Project from "./pages/ProjectPage";
import UserProfile from "./pages/UserProfilePage";
import Navbar from "./Layouts/Navbar/Navbar";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import AddIssue from "./components/Issue/Issue";
import AddProjectPage from "./pages/AddProjectPage";
import IssueListPage from "./pages/IssueListPage";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleCancel = () => {
    setShowForm(!showForm);
  };
  const Layout = () => {
    return (
      <div className="App">
        <Navbar toggleForm={toggleForm} />
        <main className="main-content">
          <Sidebar />
          {showForm && <AddIssue handleCancel={handleCancel} />}
          <Outlet />
        </main>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/projects",
          element: <Project />,
        },
        {
          path: "/profile",
          element: <UserProfile />,
        },
        {
          path: "/add-project",
          element: <AddProjectPage />,
        },
        {
          path: "/project/:id",
          element: <IssueListPage />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
