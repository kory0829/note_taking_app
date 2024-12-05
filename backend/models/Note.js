// backend/models/noteModel.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: 'Uncategorized' }, // New category field
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;