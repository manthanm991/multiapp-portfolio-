import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { AuthProvider, Login, Signup, ForgotPassword, Unauthorized, ResetPassword, PrivateRoute, PublicRoute, AdminRoute, ROUTES, TOAST_CONFIG } from './Auth';
import Layout from './components/Layout';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes without sidebar */}
            <Route element={<PublicRoute />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
              <Route path={ROUTES.SIGNUP} element={<Signup />} />
              <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
              <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
            </Route>

            {/* Routes with sidebar layout */}
            <Route path="/" element={<Layout />}>
              {/* Home page - accessible to all */}
              <Route 
                path={ROUTES.HOME} 
                element={
                  <div className="container py-5">
                    <h2>Home Page</h2>
                    <p>This is a Home page.</p>
                  </div>
                } 
              />

              {/* Protected routes */}
              <Route element={<PrivateRoute />}>
                <Route 
                  path={ROUTES.PROFILE} 
                  element={
                    <div className="container py-5">
                      <h2>Profile Page</h2>
                      <p>This is a protected profile page.</p>
                    </div>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={
                    <div className="container py-5">
                      <h2>Settings Page</h2>
                      <p>Manage your account settings here.</p>
                    </div>
                  } 
                />
              </Route>

              {/* Admin routes */}
              <Route element={<AdminRoute />}>
                <Route 
                  path={ROUTES.DASHBOARD} 
                  element={
                    <div className="container py-5">
                      <h2>Dashboard Page</h2>
                      <p>This is a dashboard page.</p>
                    </div>
                  } 
                />
                <Route 
                  path="/admin/users" 
                  element={
                    <div className="container py-5">
                      <h2>Manage Users</h2>
                      <p>Admin panel for managing users.</p>
                    </div>
                  } 
                />
                <Route 
                  path="/admin/reports" 
                  element={
                    <div className="container py-5">
                      <h2>Reports</h2>
                      <p>Admin panel for viewing reports.</p>
                    </div>
                  } 
                />
              </Route>

              {/* Catch all route for 404 */}
              <Route path="*" element={<Unauthorized />} />
            </Route>
          </Routes>

          <ToastContainer {...TOAST_CONFIG} />
        </Router>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;