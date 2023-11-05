const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    author: {
        type: String,
        required: `This field is required`
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Comment', CommentSchema);