import React, { useEffect, useState } from "react";
import TodosProvider from "../../Provider/TodosProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";

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
      {authtoken ?

        <div>
          <Navbar />
          <Outlet />
        </div>


        : <Navigate to={"/signin"} />}
    </TodosProvider>
  );
};

export default MainLayout;
