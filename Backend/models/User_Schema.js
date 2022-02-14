const mongoose = require('mongoose');
const { Schema } = mongoose;

// Here we are creating the Users Schema
const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    }
  });
const User = mongoose.model('user', UsersSchema)
module.exports = User