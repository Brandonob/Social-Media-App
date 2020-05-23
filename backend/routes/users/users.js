const users = require('express').Router();

users.get("/", (req, res) => {
    res.json("This is working")
})

module.exports = users;