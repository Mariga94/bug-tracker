import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {children && (
        <>
          <Navbar />
          <main className="main-content">
            <Sidebar />
            <div className="page-content">{children}</div>
          </main>
        </>
      )}
      {!children && <Outlet />}
    </div>
  );
};

export default Layout;
