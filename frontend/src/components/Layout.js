import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/components/layout.css";
import Footer from "./Footer";

const pageTitles = {
  // Portfolio Titles
  "/": "Home | Manthan Makode | Portfolio",
  "/about": "About | Manthan Makode | Portfolio",
  "/projects": "Projects | Manthan Makode | Portfolio",
  "/contact": "Contact | Manthan Makode | Portfolio",
  "/education": "Education | Manthan Makode | Portfolio",
  "/experience": "Experience | Manthan Makode | Portfolio",
  "/skills": "Skills | Manthan Makode | Portfolio",
  // Admin Titles - Fixed the route path
  "/dashboard": "Dashboard | Manthan Makode | Portfolio",
  "/profile": "Profile | Manthan Makode | Portfolio",
  "/settings": "Settings | Manthan Makode | Portfolio",
  "/admin/users": "Admin - Users | Manthan Makode | Portfolio",
  "/admin/reports": "Admin - Reports | Manthan Makode | Portfolio",
  // Auth Titles
  "/login": "Login | Manthan Makode",
  "/signup": "Signup | Manthan Makode",
  "/forgot-password": "Forgot Password | Manthan Makode",
  "/reset-password": "Reset Password | Manthan Makode",
  "/unauthorized": "Unauthorized | Manthan Makode",
  "*": "Page Not Found | Manthan Makode",
};

const RECAPTCHA_PAGES = ["/contact", "/login", "/signup", "/forgot-password", "/reset-password"];
const NO_FOOTER_ROUTES = ["/login","/signup", "/forgot-password", "/reset-password", "/unauthorized"];

const useRecaptchaScript = (needsRecaptcha) => {
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!needsRecaptcha || !siteKey) return;

    const existingScript = document.getElementById("recaptcha-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("recaptcha-script");
      if (scriptToRemove) { document.head.removeChild(scriptToRemove); }
      if (window.grecaptcha) { delete window.grecaptcha; }
      const recaptchaBadge = document.querySelector(".grecaptcha-badge");
      if (recaptchaBadge) { recaptchaBadge.remove(); }
    };
  }, [needsRecaptcha, siteKey]);
};

export default function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const { pathname } = useLocation();

  const title = pageTitles[pathname] || "Manthan Makode | Portfolio";
  useRecaptchaScript(RECAPTCHA_PAGES.includes(pathname.split("?")[0].replace(/\/$/, "") || "/"));

  useEffect(() => { document.title = title; }, [title]);
  useEffect(() => {
    const handleSidebarToggle = (event) => { setSidebarExpanded(event.detail.expanded); };
    window.addEventListener("sidebarToggle", handleSidebarToggle);
    return () => { window.removeEventListener("sidebarToggle", handleSidebarToggle); };
  }, []);

  return (
    <React.Fragment>
      <div className="app-layout d-flex">
        <Sidebar />
        <main className={`main-content ${sidebarExpanded ? "sidebar-expanded" : ""}`}>
          <div className="content-wrapper" id="contentWrapper">
            <div className="layout-container"><Outlet /></div>
          </div>
          {!NO_FOOTER_ROUTES.includes(pathname.split("?")[0].replace(/\/$/, "") || "/") && <Footer />}
        </main>
      </div>
    </React.Fragment>
  );
}

export const AuthLayout = ({ children }) => {
  return (<><div className="d-flex align-items-center justify-content-center">{children}</div></>);
};