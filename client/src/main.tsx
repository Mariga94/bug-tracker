import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectProvider } from "./Context/projectContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProjectProvider>
      <App />
    </ProjectProvider>
  </React.StrictMode>
);
