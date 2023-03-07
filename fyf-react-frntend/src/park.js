
import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function Park() {
	let { park_id } = useParams();
	let history = useHistory();

	return (
		<div>
			<p>You successfully navigated to next page, here's your activity_id: {park_id}</p>
		</div>
	);
}

export default Park;
