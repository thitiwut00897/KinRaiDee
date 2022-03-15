const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    },
    firstName: {
        type: String, require: true
    },
    lastName: {
        type: String, require: true
    },
    photo: {
        type: String, require: true
    },
    descriptions: {
        type: String, require: true
    },
    postCount:{
        type: Number, require: true
    }
})
const userUser = mongoose.model('users', userSchema);
module.exports = User;