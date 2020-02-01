//Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest_api_jwt');
mongoose.Promise = global.Promise;

module.exports = mongoose;