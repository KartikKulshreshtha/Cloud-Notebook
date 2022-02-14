const mongoose = require('mongoose');
const { Schema } = mongoose;

// Here we are creating the NoteSchema
const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
  });

module.exports = mongoose.model('notes', NotesSchema)