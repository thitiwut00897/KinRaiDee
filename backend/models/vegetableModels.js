
const mongoose = require('mongoose');
const vegetableSchema = mongoose.Schema({
    menu: {
        type: String, require: true
    },
    vegetableName: {
        type: String, require: true
    },
    botanicalName: {
        type: String, require: true
    },
    commonName: {
        type: String, require: true
    },
    picture: {
        type: String, require: true
    },
    genus: {
        type: String, require: true
    },
    description:{
        type: String, require: true
    }
})
const Recipe = mongoose.model('users', recipeSchema);
module.exports = Recipe;