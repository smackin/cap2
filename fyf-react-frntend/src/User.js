// this route will display a user in the db based on userId in params.
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
	let { user_id } = useParams();
    const [ user, setUser ] = useState({ users_name: '' });
	// This will display user information in a profile format.
	// Will return {username, first name, last name, image }

	
	useEffect(() => {
		// declare the data fetching function
        const getThisUser = ({ user_id } = async () => {

            const response = await axios.get(`/user/${user_id}`);
            setUser({...response.data})
            // console.log(response.stack)
            
        });

		// call the function
		getThisUser();
			// make sure to catch any error
			
	}, []);

	return (
		<div class="user_profile">
			<h3> Welcome Back {user.users_name} </h3>
			<h4> img </h4> <h4> Name </h4>
			<ul>
				<li>Favroite Places</li>
				<li>Favroite Places</li>
				<li>Favroite Places</li>
			</ul>
			<Link> National Park </Link>
		</div>
	);
}

export default User;
