//  this route will take an activity code from the user.js page and display all parks with that activity 

import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';

const ParksAPI = "https://developer.nps.gov/api/v1"; 
const key = 'b5SPZ9bRhqC2LZDBW0bvZjLlojSTZXCDSTctBS54';

function Parks() {

    const getParks = async () => {
        const [park, setPark] = useState()
    }
    async function fetchParks(){
        let res = await axios.get('https://developer.nps.gov/api/v1/activities', {params :{'id':'7779241FA70B49BC86F0829AE332C7080', 'limit': 25, 'api_key': key}
    });

    return (
        <div>
            <h1>PARKS ROUTE</h1>
        </div>
    )



}};

export default Parks;