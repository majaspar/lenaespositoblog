const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: `This field is required`
    },
    searchBy: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Category', CategorySchema);