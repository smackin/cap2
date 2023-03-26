//  this route will take an activity code from the user.js page and display all parks with that activity 

import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';


const ParksAPI = "https://developer.nps.gov/api/v1"; 
const key = 'b5SPZ9bRhqC2LZDBW0bvZjLlojSTZXCDSTctBS54';

function Parks() {



    return (
        <div>
            <h1>PARKS ROUTE</h1>
        </div>
    )



}};

export default Parks;