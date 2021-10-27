const mongoose = require("mongoose")
const userCommentSchema = mongoose.Schema({
    comment:{
        type: String, require: true
    },
    commentById:{
        type: Number, require: true
    }
})
const UserComment = mongoose.model('userComment', userCommentSchema);
module.exports = UserComment;