import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    // Handle sidebar state changes for main content margin
    const handleSidebarToggle = (event) => {
      setSidebarExpanded(event.detail.expanded);
    };

    // Listen for custom sidebar events
    window.addEventListener('sidebarToggle', handleSidebarToggle);

    return () => {
      window.removeEventListener('sidebarToggle', handleSidebarToggle);
    };
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className={`main-content ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}