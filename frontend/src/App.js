import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { AuthProvider, Login, Signup, ForgotPassword, Unauthorized, ResetPassword, PrivateRoute, PublicRoute, AdminRoute, ROUTES, TOAST_CONFIG } from './Auth';
import Layout, { AuthLayout } from './components/Layout';
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import Education from './components/portfolio/Education';
import Experience from './components/portfolio/Experience';
import About from './components/portfolio/About';
import Contact from './components/portfolio/Contact';
import Projects from './components/portfolio/Projects';
import NotFound from './components/common/NotFound';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route element={<PublicRoute />}>
                <Route path={ROUTES.LOGIN} element={<AuthLayout><Login /></AuthLayout>} />
                <Route path={ROUTES.SIGNUP} element={<AuthLayout><Signup /></AuthLayout>} />
                <Route path={ROUTES.FORGOT_PASSWORD} element={<AuthLayout><ForgotPassword /></AuthLayout>} />
                <Route path={ROUTES.RESET_PASSWORD} element={<AuthLayout><ResetPassword /></AuthLayout>} />
              </Route>

              <Route element={<PrivateRoute />}>
                <Route path={ROUTES.PROFILE} element={
                  <div className="container py-5">
                    <h2>Profile Page</h2>
                    <p>This is a protected profile page.</p>
                  </div>
                  } />
                <Route path="/settings" element={
                  <div className="container py-5">
                    <h2>Settings Page</h2>
                    <p>Manage your account settings here.</p>
                    </div>
                    } />
              </Route>

              <Route element={<AdminRoute />}>
                <Route
                  path={ROUTES.DASHBOARD}
                  element={
                    <div className="container py-5">
                      <h2>Dashboard Page</h2>
                      <p>This is a dashboard page.</p>
                    </div>
                    } />
                <Route
                  path="/admin/users"
                  element={
                    <div className="container py-5">
                      <h2>Manage Users</h2>
                      <p>Admin panel for managing users.</p>
                    </div>
                  } />
                <Route
                  path="/admin/reports"
                  element={
                    <div className="container py-5">
                      <h2>Reports</h2>
                      <p>Admin panel for viewing reports.</p>
                    </div>
                    } />
              </Route>
              
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Experience />} />
              <Route path={ROUTES.UNAUTHORIZED} element={<AuthLayout><Unauthorized /></AuthLayout>} />
            </Route>
              <Route path="*" element={<AuthLayout><NotFound /></AuthLayout>} />
          </Routes>

          <ToastContainer {...TOAST_CONFIG} />
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;