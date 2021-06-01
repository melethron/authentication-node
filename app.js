const express = require('express')

const register = require('./routes/api/register')
const connectdb = require('./db/connectdb')

const app = express()
const port = 3000

//Connect to mongodb
connectdb()

//Body-parser
app.use(express.json())

app.use('/api/register', register)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})