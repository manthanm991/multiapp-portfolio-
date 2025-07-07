import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth";
import "../styles/components/sidebar.css";

const sidebarLinks = [
    { label: "Home", path: "/", icon: "fas fa-home", auth: false, },
    { label: "About", path: "/about", icon: "fas fa-user", auth: false, },
    { label: "Projects", path: "/projects", icon: "fas fa-code", auth: false, },
    { label: "Contact Me", path: "/contact", icon: "fas fa-envelope", auth: false, },
    { label: "Profile", path: "/profile", icon: "fas fa-user", auth: true, },
    { label: "Settings", path: "/settings", icon: "fas fa-cog", auth: true, },
    { label: "Dashboard", path: "/dashboard", icon: "fas fa-tachometer-alt", auth: true, adminOnly: true, },
    { label: "Manage Users", path: "/admin/users", icon: "fas fa-users", auth: true, adminOnly: true, },
    { label: "Reports", path: "/admin/reports", icon: "fas fa-chart-bar", auth: true, adminOnly: true, }
];

export default function Sidebar() {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/");
        setIsSidebarOpen(false);
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);
    const isActiveRoute = (path) => location.pathname === path;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const sidebarExpanded = isSidebarOpen || isHovered;

    return (
        <>
            <button className={`sidebar-toggle ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar} aria-label="Toggle sidebar">
                <span className="toggle-icon">&#9776;</span>
            </button>

            {isSidebarOpen && (<div className="sidebar-overlay d-lg-none" onClick={closeSidebar}></div>)}

            <nav
                className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""} ${sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="sidebar-header">
                    <button className={`sidebar-menu-toggle ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar} aria-label="Toggle sidebar">
                        <span className="toggle-icon">&#9776;</span>
                    </button>

                    <Link to="/" className="sidebar-brand" onClick={closeSidebar}>
                        <i className="fas fa-user-circle logo-icon"></i>
                        <span className="brand-text">Manthan Makode</span>
                    </Link>

                    <button className="sidebar-close d-lg-none" onClick={closeSidebar} aria-label="Close sidebar">&times;</button>
                </div>

                <div className="sidebar-content">
                    <ul className="sidebar-nav">
                        {sidebarLinks.map(({ label, path, icon, auth, adminOnly }) => {
                            if (auth && !isAuthenticated) return null;
                            if (adminOnly && !user?.isAdmin) return null;

                            return (
                                <li className="nav-item" key={path}>
                                    <Link
                                        className={`nav-link ${isActiveRoute(path) ? "active" : ""}`}
                                        to={path}
                                        onClick={closeSidebar}
                                        title={label}
                                    >
                                        <i className={`${icon} nav-icon`}></i>
                                        <span className="nav-text">{label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="sidebar-user">
                        {isAuthenticated ? (
                            <div className="user-info">
                                <div className="user-avatar">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="user-details">
                                    <div className="user-name">
                                        <span className="user-name-text">{user?.name}</span>
                                        {user?.isAdmin && (
                                            <span className="badge bg-success admin-badge">Admin</span>
                                        )}
                                    </div>
                                    <div className="user-email">{user?.email}</div>
                                </div>
                                <button className="btn btn-outline-danger btn-sm logout-btn mt-3" onClick={handleLogout} title="Logout">
                                    <i className="fas fa-sign-out-alt logout-icon"></i>
                                    <span className="logout-text">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="auth-links">
                                <Link className="btn btn-primary btn-sm login-btn" to="/login" onClick={closeSidebar} title="Login">
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span className="auth-text">Login</span>
                                </Link>
                                <Link className="btn btn-outline-primary btn-sm signup-btn" to="/signup" onClick={closeSidebar} title="Sign Up">
                                    <i className="fas fa-user-plus"></i>
                                    <span className="auth-text">Sign Up</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
