import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn.jsx";
import SignUp from "./Components/Pages/SignUp.jsx";
import TodosProvider from "./Provider/TodosProvider.jsx";
import MainLayout from "./Components/Layout/MainLayout.jsx";
import App from "./App.jsx";
import ForgotPassword from "./Components/Pages/ForgotPassword.jsx";
import Verification from "./Components/SharedPages/Verification.jsx";
import Home from "./Components/Pages/Todo/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div>
        Oops Wrong way, go back to <Link to={"verification"}>signin</Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/today',
        element: <div></div>
      },
      {
        path: '/weekly',
        element: <div></div>
      },
    ],
  },


  {
    path: '/admin',
    element: <div></div>,

  },

  {
    path: "verification",
    element: <Verification></Verification>,
  },
  {
    path: "/signin",
    element: (
      <TodosProvider>
        <SignIn></SignIn>
      </TodosProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <TodosProvider>
        <SignIn></SignIn>
      </TodosProvider>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <TodosProvider>
        <SignIn></SignIn>
      </TodosProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
