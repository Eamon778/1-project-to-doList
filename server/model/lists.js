const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ''},
    completed: { type: Boolean, default: false},
}, {timestamps: true})

module.exports = mongoose.model('List', listSchema)