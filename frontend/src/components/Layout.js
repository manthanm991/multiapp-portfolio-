import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "./Sidebar";
import "../styles/components/layout.css";

// Page title map
const pageTitles = {
  "/": "Home | Manthan Makode | Portfolio",
  "/about": "About | Manthan Makode | Portfolio",
  "/projects": "Projects | Manthan Makode | Portfolio",
  "/contact": "Contact | Manthan Makode | Portfolio",
  "/education": "Education | Manthan Makode | Portfolio",
  "/experience": "Experience | Manthan Makode | Portfolio",
  "/skills": "Skills | Manthan Makode | Portfolio",
  "/dashboards": "Dashboard | Manthan Makode | Portfolio",
  "/profile": "Profile | Manthan Makode | Portfolio",
  "/settings": "Settings | Manthan Makode | Portfolio",
  "/admin/users": "Admin - Users | Manthan Makode | Portfolio",
  "/admin/reports": "Admin - Reports | Manthan Makode | Portfolio",
};

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const { pathname } = useLocation();

  const title = pageTitles[pathname] || "Manthan Makode | Portfolio";

  useEffect(() => {
    const handleSidebarToggle = (event) => {
      setSidebarExpanded(event.detail.expanded);
    };

    window.addEventListener("sidebarToggle", handleSidebarToggle);
    return () => {
      window.removeEventListener("sidebarToggle", handleSidebarToggle);
    };
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="app-layout d-flex">
        <Sidebar />
        <main className={`main-content ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
          <div className="content-wrapper" id="contentWrapper">
            <div className="layout-container">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

// For login, signup, etc.
export const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();

  const authTitles = {
    "/login": "Login | Manthan Makode",
    "/signup": "Signup | Manthan Makode",
    "/forgot-password": "Forgot Password | Manthan Makode",
    "/reset-password": "Reset Password | Manthan Makode",
    "/unauthorized": "Unauthorized | Manthan Makode",
    "*": "Page Not Found | Manthan Makode",
  };

  const title = authTitles[pathname] || "Manthan Makode";

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="d-flex align-items-center justify-content-center">
        {children}
      </div>
    </>
  );
};