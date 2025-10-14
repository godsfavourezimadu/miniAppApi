import React from "react";
import SignUp from "./page/Auth/SignUp";
import Login from "./page/Auth/Login";
import { HashRouter, Route, Routes } from "react-router-dom";
import RouterError from "./components/RouterError";
import DashboardLayout from "./page/Dashboard/Layout";
import Private from "./config/Private";
import AllTodo from "./components/AllTodo";
import DeletedTodo from "./components/DeletedTodo";
import Profile from "./components/Profile";
import LoginDashboard from "./components/LoginDashboard";

const App = () => {
  const userId = JSON.parse(localStorage.getItem(import.meta.env.VITE_USERID));

  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<RouterError />} />
        <Route path="/" element={!userId ? <Login /> : <LoginDashboard />} />
        <Route path="/sign_up" element={<SignUp />} />

        <Route element={<Private />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<AllTodo />} />
            <Route path="deleted_todo" element={<DeletedTodo />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
