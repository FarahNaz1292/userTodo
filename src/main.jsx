import { createRoot } from "react-dom/client";
import * as React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn.jsx";
import SignUp from "./Components/Pages/SignUp.jsx";
import TodosProvider from "./Provider/TodosProvider.jsx";
import MainLayout from "./Components/Layout/MainLayout.jsx";
import Verification from "./Components/SharedPages/Verification.jsx";
import Home from "./Components/Pages/Todo/Home.jsx";
import ForgotPassword from "./Components/Pages/ForgotPassword.jsx";
import Today from "./Components/TodoContext/FilterTabs/Today.jsx";
import Pending from "./Components/TodoContext/FilterTabs/Pending.jsx";
import Overdue from "./Components/TodoContext/FilterTabs/Overdue.jsx";
import Completed from "./Components/TodoContext/FilterTabs/Completed.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div>
        Oops Wrong way, go back to <Link to={"/"}>signin</Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/today",
        element: <Today></Today>,
      },
      {
        path: "/pending",
        element: <Pending></Pending>,
      },
      {
        path: "/overdue",
        element: <Overdue></Overdue>,
      },
      {
        path: "/completed",
        element: <Completed></Completed>,
      },
    ],
  },
  {
    path: "verification",
    element: <Verification></Verification>,
  },
  {
    path: "signin",
    element: (
      <TodosProvider>
        <SignIn></SignIn>
      </TodosProvider>
    ),
  },
  {
    path: "signup",
    element: (
      <TodosProvider>
        <SignUp></SignUp>
      </TodosProvider>
    ),
  },
  {
    path: "forgotpassword",
    element: (
      <TodosProvider>
        <ForgotPassword></ForgotPassword>
      </TodosProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
