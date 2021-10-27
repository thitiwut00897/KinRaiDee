const mongoose = require("mongoose")
const notifiactionSchema = mongoose.Schema({
    topic:{
        type: String, require: true
    },
    dateTime:{
        type: Date, require: true
    },
    reference:{
        type: String, require: true
    }
})
const Notifiaction = mongoose.model('notifiaction', notifiactionSchema);
module.exports = Notifiaction;