const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Pet name is required'],
    minlength: [3, 'Pet name should have at least 3 characters'],
    unique: [true, 'Pet Name should be unique']
  },
  type: {
    type: String,
    trim: true,
    required: [true, 'Pet Type is required'],
    minlength: [3, 'Pet Type should have at least 3 characters'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Pet Description is required'],
    minlength: [3, 'Pet Description should have at least 3 characters'],
  },
  skill_one: {
    type: String,
    trim: true
  },
  skill_two: {
    type: String,
    trim: true
  },
  skill_three: {
    type: String,
    trim: true
  },
  likes: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);


