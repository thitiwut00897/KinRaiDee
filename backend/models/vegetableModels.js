const mongoose = require('mongoose');
const vegetableSchema = mongoose.Schema({
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
    description:{
        type: String, require: true
    },
    recipeId:{
        type: String, require: true
    }
})
const Vegetable = mongoose.model('vegetables', vegetableSchema);
module.exports = Vegetable;