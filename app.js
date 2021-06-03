const express = require('express')

const login = require('./routes/api/login')
const kubernetes = require('./routes/api/kubernetes')
const register = require('./routes/api/register')

const connectdb = require('./config/connectdb')

const app = express()
const port = process.env.PORT || 3000


//Connect to mongodb
connectdb()

//Body-parser
app.use(express.json())

// Routes
app.use('/api/register', register)
app.use('/api/login', login)
app.use('/api/kubernetes', kubernetes)

//Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
