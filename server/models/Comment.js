const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    author: {
        type: String,
        required: `This field is required`
    },
    content: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Comment', CommentSchema);