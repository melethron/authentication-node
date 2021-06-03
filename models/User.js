const mongoose = require('mongoose')
const user = new mongoose.Schema({ 
    login: 'string', 
    password: 'string' 
});
const User = mongoose.model('User', user);

module.exports = User