import React, {useState} from "react"
import {Link } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePwChange= (e) => {
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert(`${username} has been added to database`)
        setUsername("")
    }
    
    
    return ( 
        <div>

        <h2>FindYourFun</h2>
        <h4>Sign into your Account </h4>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={handleChange}/> <br></br>
            <input type="text" placeholder="password" value={password} onChange={handlePwChange}/> <br></br>
            <button>User Login</button>
        </form>

        <img src="https://images.unsplash.com/photo-1527593625869-8f9b09712351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWR2ZW50dXJlJTIwbG92ZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60" class="img-fluid "alt="login" />
        <br></br>

        <p> Forgot your Password? <a href="/register"> Reset Password</a></p>
        <p> Dont have an account? <Link to="/register">Sign Up</Link></p>

        </div>
    )
}

export default LoginForm;