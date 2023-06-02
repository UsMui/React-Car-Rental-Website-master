import React, { useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../admins/AdminDashboard";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import { UserProvider } from "../store/context";
import reducer from "../store/reducer";
import INIT_STATE from "../store/initState";

const Routers = () => {
  const localState = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):INIT_STATE;
  const[state,dispatch] = useReducer(reducer,localState);
  return (
    <UserProvider value ={{state,dispatch}}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/admins" element={<AdminDashboard/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/otos/:id" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </UserProvider>
  );
};

export default Routers;
