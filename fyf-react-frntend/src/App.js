import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import LoginForm from "./Login";
import UserRegisterForm from "./Register";
import AllUsers from "./AllUsers";
import Axios from "axios";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <LoginForm/>
        </Route>
        <Route exact path='/register'>
          <UserRegisterForm/>
        </Route>
        <Route exact path='/allusers'>
          <AllUsers/>
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
