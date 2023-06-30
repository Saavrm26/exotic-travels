const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    rating: {
      type: Number,
      required: [true, 'A rating must be given'],
      default: 4.5,
      min: [1, 'Rating cannot be less than 1'],
      max: [5, 'Rating cannot be more than 5'],
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Review must belong to a tour'],
      ref: 'Tour',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'Review must belong to a user'],
      ref: 'User',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
