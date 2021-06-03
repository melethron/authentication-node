const express = require('express')
const jwt = express('jsonwebtoken')

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({msg: "Authorization required"})
    }
    try {
        const decoded = jwt.verify(token, config.jwtsecret)
        req.user = decode.user
        next()
      } catch(err) {
        return res.status(401).json({msg: "Authorization required"})
      }
}

module.exports = auth