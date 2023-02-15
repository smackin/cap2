// this route will display a list of all users in the db. 
import React, {useState, useEffect} from "react";
import axios from "axios";


function AllUsers () {
    const[allUsers, setAllUsers]=useState("");
    
    const getUsers = async() => {
        const response=await axios.get("http://localhost:5000/getUsers");
        setAllUsers(response.data);
    }

    useEffect(()=> {
        getUsers()
    }, []);
    return (
        <div>
            <h2> {allUsers} </h2>
        </div>
    )
}

export default AllUsers;