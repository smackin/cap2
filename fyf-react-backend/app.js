const express = require('express');
const app = express();
const db = require('./db');
// const cors = require('cors');

app.use(express.json());
const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");


app.use(authenticateJWT);
app.use("/auth", authRoutes);

app.listen(5000, function () {
    console.log('App on port 5000');
});