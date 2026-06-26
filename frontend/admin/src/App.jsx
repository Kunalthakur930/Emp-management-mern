import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";
import Welcome from "./Component/Welcome";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import Privatenav from "./Component/Privatenav";
import AddEmp from "./Component/AddEmp";
import ViewEmp from "./Component/ViewEmp";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function AppContaint() {
  // console.log(token);
  const navigate = useNavigate();
  const { islogin } = useAuth();
  return (
    <div>
      {islogin ? <Privatenav /> : <Navbar />}
      <Routes>
        <Route
          path="/"
          element={islogin ? <Navigate to="/welcome" /> : <Home />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddEmp />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view"
          element={
            <ProtectedRoute>
              <ViewEmp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div>
      <AuthProvider>
        <AppContaint />
      </AuthProvider>
    </div>
  );
}

export default App;
