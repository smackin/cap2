const express = require('express');
const app = express();
const db = require('./db');
// const cors = require('cors');

app.use(express.json());

// app.use(cors());

app.get('/user', async (req, res, next) => {
    try {
        const result = await db.query(`SELECT * FROM fyfreactapp_users`);
        return res.status(200).json({ allUsers:result.rows});
    } catch (err) {
        console.log(err)
    }
    console.log(res.body)
    
})

app.get('/user/:user_id', async (req, res, next) => {
    try {
        console.log(req.params)
        const user_id = req.params.user_id;
        const result = await db.query(`SELECT * FROM fyfreactapp_users WHERE user_id = ${user_id}`);
        return res.status(200).json({ allUsers:result.rows});
    } catch (err) {
        console.log(err)
    }
    console.log(res.body)
    
})


    //     try  {
// 	res.send = await db.query(`SELECT * FROM fyfreactapp_users`);

// 	console.log(res.body)
// } catch (error) {
//     console.log(error.message)
//     return next(error); 
// }
// console.log(res.body)
// } );

app.listen(5000, function () {
    console.log('App on port 5000');
});


