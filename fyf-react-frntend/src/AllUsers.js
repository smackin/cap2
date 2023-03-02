// this route will display a list of all users in the db. 
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import axios from "axios";


function AllUsers () {
    const[allUsers, setAllUsers]=useState([]);
    
    const getUsers = async () => {
        const response=await axios.get("/user");
        // console.log(response.stack)
        setAllUsers(response.data.allUsers);
    }

    useEffect(()=> {
        getUsers()
    }, []);
    return (
        <div>
        {allUsers.map(user => <div 
            key={user.user_id}>
            <div>
            <p>{user.user_id}</p>
            <p>{user.users_name}  </p>
            <Link to={`/user/${user.user_id}`}>{user.username}</Link>
            </div>
            </div>)}
        </div>
    )
}

export default AllUsers;