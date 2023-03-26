const axios = require('axios');
const express = require('express');
const router = new express.Router();

const API_BASE_URL = 'https://developer.nps.gov/api/v1';
const key = 'b5SPZ9bRhqC2LZDBW0bvZjLlojSTZXCDSTctBS54';

// may need to use this method to call the activity ID
// var params = {
// 	paramName1: paramValue1,
// 	paramName2: paramValue2
// 	}

// const headers = {
// "Content-Type": "application/json",
// }

// 	Axios.get(url, {params, headers} ).then(res =>{
// 	console.log(res.data.representation);
// 	});

const headers = {
	headers: {
		'Content-Type': 'application/json'
	}
};



router.get('/:park_id', async function(req, res, next) {
	const park_id = req.params.park_id
	axios
		.get(
			`https://developer.nps.gov/api/v1/activities/parks?id=${park_id}&api_key=b5SPZ9bRhqC2LZDBW0bvZjLlojSTZXCDSTctBS54`,
		headers 
		)
		.then((apiResponse) => {
			const data = apiResponse.data;
			console.log("test")
			console.log(data);
			const parkResults = data.data[0].parks.map((park) => {
				return park;
			});
			return res.status(200).json(parkResults);
		})
		.catch((error) => {
			console.error(error);
		});

});

module.exports = router;
