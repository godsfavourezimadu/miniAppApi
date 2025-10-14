import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const usertoken = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_USERTOKEN)
  );

  return <div>{usertoken ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default Private;
