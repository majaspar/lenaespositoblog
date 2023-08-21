const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: Array,
        required: false
    },
    shortDescription: {
        type: String,
        required: true
    },
    imageSource: {
        type: String,
        required: false
    }, 
    imageSourceDescription: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Post', PostSchema);