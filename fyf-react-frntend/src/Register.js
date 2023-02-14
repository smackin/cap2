import React, {useState} from "react"

const UserRegisterForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
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
        <h4>Sign up for an Account </h4>
        <h4> The one stop for all of your outdoor adventure needs and wants. 
            Before we get started, lets find out more about you! </h4>
            <img src="https://images.unsplash.com/photo-1502176747191-3354e2597a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2luZyUyMHRyYWlsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid "alt="login" ></img>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstname} onChange={handleChange}/>
            <input type="text" placeholder="Last Name" value={lastname} onChange={handleChange}/><br></br>
            <input type="text" placeholder="email" value={email} onChange={handleChange}/><br></br>
            <input type="text" placeholder="username" value={username} onChange={handleChange}/>
            <input type="text" placeholder="password" value={password} onChange={handlePwChange}/><br></br>
            <button>Sign Up!</button>
        </form>
        
        </div>  
    )
}

export default UserRegisterForm;