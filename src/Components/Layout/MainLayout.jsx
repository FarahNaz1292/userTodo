import React, { useEffect, useState } from "react";
import TodosProvider from "../../Provider/TodosProvider";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [authtoken, setAuthToken] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log("token", token);

    if (token) {
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  }, [token]);
  console.log(authtoken);
  if (authtoken === null) {
    return <div>Loading Animation</div>;
  }
  return (
    <TodosProvider>
      {authtoken ? <Outlet /> : <Navigate to={"/signin"} />}
    </TodosProvider>
  );
};

export default MainLayout;
