const mongoose = require('mongoose');

const category = mongoose.Schema({
    name: { type: String, require: true },
    display_name: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = mongoose.model('categoriesModel', category);
