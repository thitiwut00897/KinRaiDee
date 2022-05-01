const mongoose = require('mongoose');
const userCommentSchema = mongoose.Schema({
    comment:{
        type: String, require: true
    },
    userId:{
        type: String, require: true
    },
    date:{
        type: String, require: true
    },
    recipeId:{
        type: String, require: true
    }
})
const UserComment = mongoose.model('userComments', userCommentSchema);
module.exports = UserComment;