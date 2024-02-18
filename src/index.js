import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/screen/Home/Home.js'
import RegisterPage from './components/screen/Register/Register.js'
import LoginPage from "./components/screen/Login/Login.js";
import Layout from "./components/screen/Layout/Layout.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/Register",
    element: <RegisterPage />,
  },
  {
    path: "/Layout",
    element: <Layout />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)