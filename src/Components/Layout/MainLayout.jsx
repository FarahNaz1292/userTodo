import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Pages/global-import.scss";
import React, { useEffect, useState } from "react";
import TodosProvider from "../../Provider/TodosProvider";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Pages/Todo/Header";
import Loading from "../Loading";
const MainLayout = () => {
  const [authtoken, setAuthToken] = useState(null);
  const token = localStorage.getItem("user-token");
  console.log(token);

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
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  return (
    <>
      <TodosProvider>
        {authtoken ? (
          <div>
            <Header></Header>
            <Outlet></Outlet>
          </div>
        ) : (
          <Navigate to={"/signin"}></Navigate>
        )}
      </TodosProvider>
    </>
  );
};

export default MainLayout;
