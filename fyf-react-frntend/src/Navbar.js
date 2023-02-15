import {NavLink } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="Navbar"> 
        <NavLink exact to="/register">Sign Up</NavLink>
        <NavLink exact to="/login">Sign In</NavLink>
        <NavLink exact to="/getusers">All Users</NavLink>
        <NavLink exact to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar; 