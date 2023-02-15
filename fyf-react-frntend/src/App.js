import { Route} from "react-router-dom";
import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import LoginForm from "./Login";
import UserRegisterForm from "./Register";
import AllUsers from "./AllUsers";





function App() {
  return (
    <div className="App">
      <Navbar/>
        <Route exact path='/login'>
          <LoginForm/>
        </Route>
        <Route exact path='/register'>
          <UserRegisterForm/>
        </Route>
        <Route exact path='/getusers'>
          <AllUsers/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
    </div>
  );
}

export default App;
