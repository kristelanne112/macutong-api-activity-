const mongoose = require('mongoose');

// Embedded Review Schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, 'User is required'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot exceed 5']
  },
  comment: {
    type: String,
    trim: true
  }
}, { _id: false }); // optional: prevents generating _id for each review

// Main Dish Schema
const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Dish name is required'],
    unique: true,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
    max: [1000, 'Price cannot exceed 1000']
  },
  category: {
    type: String,
    enum: ['Starters', 'Main', 'Dessert', 'Drinks'],
    required: [true, 'Category is required']
  },
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chef', // Reference to Chef
    required: [true, 'Chef reference is required']
  },
  isVegetarian: {
    type: Boolean,
    default: false
  },
  reviews: [reviewSchema] // Embedded reviews
}, { timestamps: true });

module.exports = mongoose.model('Dish', dishSchema);
