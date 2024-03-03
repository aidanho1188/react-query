const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, default: 'No Title' },
  content: { type: String, default: '' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);