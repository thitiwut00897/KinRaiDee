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
        type: String, require: true
    },
    picture: {
        type: String, require: true
    },
    likeCount: {
        type: Number, require: true
    },
    commentCount:{
        type: Number, require: true
    },
    userId:{
        type: String, require: true
    }
})
const Recipe = mongoose.model('recipes', recipeSchema);
module.exports = Recipe;