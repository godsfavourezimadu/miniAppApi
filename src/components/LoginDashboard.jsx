import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginDashboard = () => {
  const nav = useNavigate();

  useEffect(() => {
    nav("/dashboard");
  });
  return null;
};

export default LoginDashboard;
