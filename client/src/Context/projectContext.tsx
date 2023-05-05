import React, { ReactNode, createContext, useState } from "react";

type Project = {
  id: number;
  name: string;
};

type ProjectContextType = {
  projects: Project[];
  addProject: (project: Project) => void;
};

// Create project context
export const ProjectContext = createContext<ProjectContextType>({
  projects: [],
  addProject: () => {},
});

type ProjectProviderProps = {
  children: ReactNode;
};
// Create a provider for the project context
export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  // Set up the initial state of the projects
  const [projects, setProjects] = useState<Project[]>([]);

  // create a function for adding new projects
  const addProject = (project: Project) => {
    setProjects([...projects, project]);
  };
  // Create the value object that will be passed to the context provider
  const value = {
    projects,
    addProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
