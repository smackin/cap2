import {NavLink } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="Navbar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/register">Sign Up</NavLink>
        <NavLink exact to="/login">Sign In</NavLink>
        </nav>
    )
}

export default Navbar; 