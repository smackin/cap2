import { Route} from "react-router-dom";
import './App.css';
import React from 'react';
import Home from "./Home";
import LoginForm from "./Login";
import UserRegisterForm from "./Register";
import AllUsers from "./AllUsers";
import User from "./User";
import Park from "./park";

function Routes() {
    return (
        <>
        <Route exact path='/login'><LoginForm/></Route>
        <Route exact path='/register'><UserRegisterForm/></Route>
        <Route exact path='/user'><AllUsers/></Route>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/park/:park_id'><Park/></Route>
        <Route exact path='/user/:user_id'><User/></Route>
        </>
    )
}

export default Routes; 