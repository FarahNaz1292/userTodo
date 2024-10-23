import React, { useEffect, useState } from "react";
import TodosProvider from "../../Provider/TodosProvider";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [authtoken, setAuthToken] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  }, []);
  return (
    <>
      <TodosProvider>
        {authtoken ? <Outlet></Outlet> : <Navigate to={"/signin"}></Navigate>}
      </TodosProvider>
    </>
  );
};

export default MainLayout;
