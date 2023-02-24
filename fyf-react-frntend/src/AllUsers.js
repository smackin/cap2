// this route will display a list of all users in the db. 
import React, {useState, useEffect} from "react";
import {Link } from "react-router-dom";
import axios from "axios";


function AllUsers () {
    const[allUsers, setAllUsers]=useState([]);
    
    const getUsers = async () => {
        const response=await axios.get("/getUsers");
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
            <Link>{user.users_name} {user.user_id}</Link>
            </div>)}
        </div>
    )
}

export default AllUsers;