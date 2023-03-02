import {NavLink } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="Navbar"> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/user">All Users</NavLink>

        </nav>
    )
}

export default Navbar; 