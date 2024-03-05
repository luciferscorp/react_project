import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/screen/Home/Home.js'
import RegisterPage from './components/screen/Register/Register.js'
import LoginPage from "./components/screen/Login/Login.js";
import Layout from "./components/screen/Layout/Layout.js";
import DropDown from "./components/common/DropDown.js";
import UserTable from "./components/screen/UserTable/UserTable.js";
import Pagination from "./components/common/Pagination.js";
import Admin from "./components/screen/Admin/Admincompany.js";
import Employee from "./components/screen/Employee/Employee.js";
import Company from "./components/screen/Company/Company.js";
import Test from "./components/screen/Test/Test.js";
 

function PrivateRoute({ component: Component, ...rest }) {

  const isLoggedIn =false
 const userType = localStorage.getItem("userType") || 1;

  
  function getItemFromLocal(localData) {
    let form_data = JSON.parse(localStorage.getItem(localData));
    return form_data;
  }

  const userData = getItemFromLocal("user_local");

  if (userData!==null){
    isLoggedIn = true;
  }
  

  // Add your logic to restrict access based on user type and isLoggedIn
  // For example, if userType is "admin" and isLoggedIn is true, allow access to the route

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Component /> : <Navigate to="/login" />}
    />
  );
}


function App() {
  const router = createBrowserRouter();
  
  return (
    <RouterProvider router={router}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <PrivateRoute path="/layout" component={Layout} />
          <PrivateRoute path="/dropdown" component={DropDown} />
          <PrivateRoute path="/usertable" component={UserTable} />
          <PrivateRoute path="/pagination" component={Pagination} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/employee" component={Employee} />
          <PrivateRoute path="/company" component={Company} />
          <PrivateRoute path="/test" component={Test} />
        </Routes>
      </BrowserRouter>
    </RouterProvider>
  );
}

export default App;
