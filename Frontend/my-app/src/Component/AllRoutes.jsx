import{Routes,Route} from "react-router-dom"

import React from 'react'
import Home from "../Pages/Home"
import PrivateRoute from "./PrivateRoute"
import Profile from "../Pages/Profile"
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import BlogPage from "../Pages/BlogPage"

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route element={Home} path="/"/>
        <Route element={<PrivateRoute><Profile/></PrivateRoute>} path="/profile"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<BlogPage/>} path="/blog" />
      </Routes>
    </div>
  )
}

export default AllRoutes
