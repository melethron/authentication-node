const express = require('express')
const namespace = require('../../services/kubernetes/namespace')
const kubernetes = express.Router()

// @route   POST api/kubernetes/namespace/:namespacename
// @desc    Create namespace
// @access  Public
kubernetes.post('/namespace/:namespacename', async (req, res) => {
    try {
        const ns = await namespace.createNamespace(req.params.namespacename)
        if (ns.response) {
            return res.status(ns.response.statusCode).send(ns.response)
        }
        return res.status(ns.code).send(ns)
    } catch(err) {
        console.log(err)
        return res.send(err)
    }
})

// @route   DELETE api/kubernetes/namespace/:namespacename
// @desc    delete existing namespace
// @access  Public
kubernetes.delete('/namespace/:namespacename', async (req, res) => {
    try {
        const ns = await namespace.deleteNamespace(req.params.namespacename)
        if (ns.response) {
            return res.status(ns.response.statusCode).send(ns.response)
        }
        return res.status(ns.code).send(ns)
    } catch(err) {
        return res.sendStatus(500).json(err)
    }
})

module.exports = kubernetes
