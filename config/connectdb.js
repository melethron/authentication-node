const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Connected to mongodb...")
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectdb