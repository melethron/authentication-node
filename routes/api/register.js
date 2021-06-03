const bcrypt = require('bcrypt')
const express = require('express')
const { body, validationResult } = require('express-validator')

const User = require('../../models/User')

const register = express.Router()

//Register route
register.post(
    '/',
    body('login').not().isEmpty(),
    body('password').not().isEmpty(),
    async (req, res) => {
        // Validate login and password
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { login, password } = req.body
        try {
            let user = await User.findOne({ login })
            if (!user) {
                //Hash password
                const salt = bcrypt.genSaltSync(10);
                const passwordHash = bcrypt.hashSync(password, salt);
                //Save user
                user = new User({login, password: passwordHash})
                await user.save()
                return res.status(200).json({ msg: "User registered" })
            }
            else {
                return res.status(409).json({msg: "User already exists"})
            }
        } catch(err) {
            return res.status(500).json({msg: "Something went wrong"})
        }
    }
)

module.exports = register