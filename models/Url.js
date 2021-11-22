const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    origUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Url', UrlSchema);