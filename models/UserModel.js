let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Users', userSchema);