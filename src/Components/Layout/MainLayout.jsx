import React, { useEffect, useState } from "react";
import TodosProvider from "../../Provider/TodosProvider";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const [authtoken, setAuthToken] = useState(null); // Use null to indicate loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(true);
    } else {
      setAuthToken(false);
    }
  }, []);

  if (authtoken === null) {
    // Show a loading state or nothing while checking auth
    return <div>Loading...</div>;
  }

  return (
    <TodosProvider>
      {authtoken ? <Outlet /> : <Navigate to={"/signin"} />}
    </TodosProvider>
  );
};

export default MainLayout;
