const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

const { authenticateJWT } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const parkRoutes = require("./routes/parks");


app.use(express.json());
app.use(authenticateJWT);

// Try and match the following
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/parks", parkRoutes);


app.listen(5000, function () {
    console.log('App on port 5000');
});