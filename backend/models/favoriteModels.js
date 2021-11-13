const mongoose = require('mongoose');
const favoriteSchema = mongoose.Schema({
    userId:{
        type: String, require: true
    },
    recipeId:{
        type: String, require: true
    }
})
const Favorite = mongoose.model('favorites', favoriteSchema);
module.exports = Favorite;