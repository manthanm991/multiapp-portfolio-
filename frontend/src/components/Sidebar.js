import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth";
import "../styles/sidebar.css";

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

    const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); };
    const closeSidebar = () => { setIsSidebarOpen(false); };
    const isActiveRoute = (path) => { return location.pathname === path; };
    const handleMouseEnter = () => { setIsHovered(true); };
    const handleMouseLeave = () => { setIsHovered(false); };
    const sidebarExpanded = isSidebarOpen || isHovered;

    return (
        <>
            <button className={`sidebar-toggle d-lg-none ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar} aria-label="Toggle sidebar" >
                <span className="toggle-icon">&#9776;</span>
            </button>

            {isSidebarOpen && (<div className="sidebar-overlay d-lg-none" onClick={closeSidebar}></div>)}

            <nav className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""} ${sidebarExpanded ? "sidebar-expanded" : "sidebar-collapsed"
                }`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <div className="sidebar-header">
                    <button className={`sidebar-menu-toggle d-none d-lg-block ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar} aria-label="Toggle sidebar" >
                        <span className="toggle-icon">&#9776;</span>
                    </button>

                    <Link to="/" className="sidebar-brand" onClick={closeSidebar}>
                        <i className="fas fa-user-circle logo-icon"></i>
                        <span className="brand-text">Manthan Makode</span>
                    </Link>


                    <button className="sidebar-close d-lg-none" onClick={closeSidebar} aria-label="Close sidebar" > &times; </button>
                </div>

                <div className="sidebar-content">
                    <ul className="sidebar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${isActiveRoute("/") ? "active" : ""}`} to="/" onClick={closeSidebar} title="Home" >
                                <i className="fas fa-home nav-icon"></i>
                                <span className="nav-text">Home</span>
                            </Link>
                        </li>

                        {isAuthenticated && user?.isAdmin && (
                            <li className="nav-item">
                                <Link className={`nav-link ${isActiveRoute("/dashboard") ? "active" : ""}`} to="/dashboard" onClick={closeSidebar} title="Dashboard" >
                                    <i className="fas fa-tachometer-alt nav-icon"></i>
                                    <span className="nav-text">Dashboard</span>
                                </Link>
                            </li>
                        )}

                        {isAuthenticated && (
                            <li className="nav-item">
                                <Link className={`nav-link ${isActiveRoute("/profile") ? "active" : ""}`} to="/profile" onClick={closeSidebar} title="Profile" >
                                    <i className="fas fa-user nav-icon"></i>
                                    <span className="nav-text">Profile</span>
                                </Link>
                            </li>
                        )}

                        {isAuthenticated && (
                            <li className="nav-item">
                                <Link className={`nav-link ${isActiveRoute("/settings") ? "active" : ""}`} to="/settings" onClick={closeSidebar} title="Settings" >
                                    <i className="fas fa-cog nav-icon"></i>
                                    <span className="nav-text">Settings</span>
                                </Link>
                            </li>
                        )}

                        {isAuthenticated && user?.isAdmin && (
                            <>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActiveRoute("/admin/users") ? "active" : ""}`} to="/admin/users" onClick={closeSidebar} title="Manage Users" >
                                        <i className="fas fa-users nav-icon"></i>
                                        <span className="nav-text">Manage Users</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${isActiveRoute("/admin/reports") ? "active" : ""
                                        }`} to="/admin/reports" onClick={closeSidebar} title="Reports" >
                                        <i className="fas fa-chart-bar nav-icon"></i>
                                        <span className="nav-text">Reports</span>
                                    </Link>
                                </li>
                            </>
                        )}
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
                                        {user?.isAdmin && (<span className="badge bg-success admin-badge"> Admin </span>)}
                                    </div>
                                    <div className="user-email">{user?.email}</div>
                                </div>
                                <button className="btn btn-outline-danger btn-sm logout-btn mt-3" onClick={handleLogout} title="Logout" >
                                    <i className="fas fa-sign-out-alt logout-icon"></i>
                                    <span className="logout-text">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <div className="auth-links">
                                <Link className="btn btn-primary btn-sm login-btn" to="/login" onClick={closeSidebar} title="Login" >
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span className="auth-text">Login</span>
                                </Link>
                                <Link
                                    className="btn btn-outline-primary btn-sm signup-btn" to="/signup" onClick={closeSidebar} title="Sign Up" >
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