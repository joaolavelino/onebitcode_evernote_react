import React, { useEffect } from "react";
import Home from "./screens/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/";
import UsersEditScreen from "./screens/users/edit";
import Header from "./components/header";
import PrivateRoute from "./components/auth/private_route";
import SkipLoginRoute from "./components/auth/skip_login_route";
import HeaderLogged from "./components/headerLogged";


const Routing = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SkipLoginRoute><Home /></SkipLoginRoute>} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/notes" element={<PrivateRoute><NotesScreen/></PrivateRoute>} />
        <Route exact path="/users/edit" element={<PrivateRoute><UsersEditScreen/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
};

export default Routing;
