const mongoose = require('mongoose');

const schema = mongoose.Schema({
    text: { type: String, max: 400 },
    user: { type: String, require: true, max: 100 },
    timestamp: { type: Date, default: new Date() }
});

const Message = mongoose.model('mensajes', schema);

module.exports = Message;