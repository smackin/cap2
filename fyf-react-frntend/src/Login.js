import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

const LoginForm = ({ login }) => {
	let { user_id } = useParams();
	const history = useHistory();
	const initialState = {
		username: "",
		password: ""
	};

	const [ formData, setFormData ] = useState(initialState);

	async function handleSubmit(e) {
		e.preventDefault();
		let result = await login(formData);
		if (result.success) {
			history.push(`/user/${user_id}`);
		};
	
	}
	const handleChange = (e) => {
		e.preventDefault();
		
	}

		return (
			<div>
				<h2>FindYourFun</h2>
				<h4>Sign into your Account </h4>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="username" value={formData.username} onChange={handleChange}/> <br />
					<input type="text" placeholder="password" value={formData.password} onChange={handleChange} /> <br />
					<button>User Login</button>
				</form>

				<img
					src="https://images.unsplash.com/photo-1527593625869-8f9b09712351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWR2ZW50dXJlJTIwbG92ZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=400&q=60"
					className="img-fluid "
					alt="login"
				/>
				<br />

				<p>
					Forgot your Password? <a href="/register"> Reset Password</a>
				</p>
				<p>
					Dont have an account? <Link to="/register">Sign Up</Link>
				</p>
			</div>
		);

};

export default LoginForm;
