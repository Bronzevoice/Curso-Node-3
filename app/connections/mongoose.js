var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DevAsk');


module.exports = mongoose;