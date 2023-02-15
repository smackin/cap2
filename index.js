const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/getUsers', async (req, res) => {
    try  {
	const res.send = await db.query(`SELECT * FROM fyfreactapp_users`);

	return res.json(results.rows);
} catch (error) {
    console.log(error.message)
    return next(error); 
}
} );

app.listen(5000, function () {
    console.log('App on port 5000');
});
