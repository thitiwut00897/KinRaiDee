const mongoose = require('mongoose');
const notifiactionSchema = mongoose.Schema({
    topic:{
        type: String, require: true
    },
    dateTime:{
        type: String, require: true
    },
    userId:{
        type: String, require: true
    },
    commentId:{
        type: String, require: true
    },
    recipeId:{
        type: String, require: true
    },
    Reference:{
        type: String, require: true
    }
})
const Notifiaction = mongoose.model('notifiactions', notifiactionSchema);
module.exports = Notifiaction;