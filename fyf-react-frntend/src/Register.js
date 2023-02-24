import React, {useState} from "react"

const UserRegisterForm = () => {
    const initialState = {
        firstname: "", 
        lastname: "", 
        email:"", 
        uesrname:"", 
        password: ""
    }
    const [formData, setFormData] = useState(initialState)
    
    const handleChange = e => {
        const{name, value} = e.target
        setFormData(data => ({
            ...data, 
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("You have been added to database")
        setFormData(initialState)
    }
    
    return ( 
        <div>
        <h2>FindYourFun</h2>
        <h4>Sign up for an Account </h4>
        <h4> The one stop for all of your outdoor adventure needs and wants. <br></br>
            Before we get started, lets find out more about you! </h4>
            <img src="https://images.unsplash.com/photo-1502176747191-3354e2597a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2luZyUyMHRyYWlsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid "alt="login" ></img>

        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name:</label>
            <input 
            id="fistname" 
            type="text" 
            name="firstname"
            value={formData.firstname} 
            onChange={handleChange}
            />

            <label htmlFor="lastname">Last Name:</label>

            <input 
            id="lastname" 
            type="text"  
            name="lastname"
            value={formData.lastname} 
            onChange={handleChange}
            /><br></br>
            
            <label htmlFor="email">email:</label>
            <input 
            id="email" 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange}
            /><br></br>

            <label htmlFor="username">username:</label>
            <input 
            id="username" 
            type="text" 
            name="username"
            value={formData.username} 
            onChange={handleChange}
            />
            
            <label htmlFor="password">password:</label>
            <input 
            id="password" 
            type="text" 
            name="password"
            value={formData.password} 
            onChange={handleChange}
            /><br></br>

            <button>Sign Me Up!</button>
        </form>
        </div>  
    )
}

export default UserRegisterForm;