import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Module from "./pages/Module";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Api from "./api";

import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="module/:module_id" element={<Module />} />
      </Route>
      <Route path="/admin" element={<Outlet />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
      </Route>
    </Routes>
  );
}

function LoginRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth();

  return isLoading ? null : isAuthenticated ? (
    <Navigate to="/admin" replace />
  ) : (
    children
  );

  //return<Route {...rest} element={<Outlet>{children}</Outlet>} />;
}

function ProtectedRoute({ children, ...rest }) {
  const { isAuthenticated, isLoading } = useAuth();

  return isLoading ? null : isAuthenticated ? (
    children
  ) : (
    <Navigate to="/admin/login" replace />
  );

  //return<Route {...rest} element={<Outlet>{children}</Outlet>} />;
}

export default App;
