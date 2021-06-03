const bcrypt = require('bcrypt')
const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../../models/User')

const login = express.Router()

login.post("/", async (req, res) => {
    const { login, password } = req.body
    try {
        const user = await User.findOne({ login })
        console.log(user)
        if (!user) {
            return res.status(401).json({msg: "User not found"})
        }
        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({id: user.id}, config.jwtsecret)
            return res.json({token})
        } else {
            return res.status(401).json({msg: "User not found"})
        }
    } catch(err) {
        return res.status(500).json({msg: "Internal server error"})
    }
})

module.exports = login