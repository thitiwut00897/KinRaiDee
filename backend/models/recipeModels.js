
const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    recipeName: {
        type: String, require: true
    },
    directions: {
        type: String, require: true
    },
    ingredients: {
        type: String, require: true
    },
    date: {
        type: Date, require: true
    },
    picture: {
        type: String, require: true
    },
    likeCount: {
        type: Number, require: true
    },
    commentCount:{
        type: Number, require: true
    }
})
const Recipe = mongoose.model('users', recipeSchema);
module.exports = Recipe;