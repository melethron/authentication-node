const mongoose = require('mongoose')
const kubernetes = new mongoose.Schema({ 
    domainName: 'string', 
    emailAddress: 'string',
    applicationVersion: 'string',
    namespace: 'string',
    status: 'string'
});
const Kubernetes = mongoose.model('Kubernetes', kubernetes);

module.exports = Kubernetes