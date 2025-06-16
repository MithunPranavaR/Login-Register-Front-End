import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "../Components/LoginandRegisterForm/LoginForm";
import RegisterForm from "../Components/LoginandRegisterForm/RegisterForm";
import React from "react";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login"/>} />
            <Route path="/login" element={<LoginForm/>} /> 
            <Route path="/register" element={<RegisterForm/>} />
        </Routes>  
    </Router>
  );
}