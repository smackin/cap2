"use strict";

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const { BadRequestError } = require("../expressError");
const {ensureLoggedIn} = require("../middleware/auth")

router.get("/", async function (req, res, next) {
    try {
        const result = await User.findAll();
        return res.status(200).json(result);
    } catch (err) {
        console.log(err)
    }
    console.log(res.body)
})

router.get("/:user_id", async function (req, res, next) {
    try {
        console.log(req.params)
        const user_id = req.params.user_id;
        const result = await User.findUserById(user_id);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err)
    }
    console.log(res.body)
    
})

module.exports = router;
