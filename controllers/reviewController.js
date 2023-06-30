const Review = require('../models/reviewModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');

const getAllReviews = catchAsync(async (req, res, next) => {
  const query = Review.find();
  const features = new APIFeatures(query, req.query).paginate();
  const reviews = await features.query;
  const reviewCount = await features.query.clone().countDocuments();
  res.status(200).json({
    status: 'success',
    length: reviewCount,
    data: {
      reviews,
    },
  });
});

const getAllReviewsForATour = catchAsync(async (req, res, next) => {
  const { tourId } = req.params;
  const query = Review.find({ tour: tourId });
  const features = new APIFeatures(query, req.query).paginate();
  const reviews = await features.query;
  const reviewCount = await features.query.clone().countDocuments();
  res.status(200).json({
    status: 'success',
    length: reviewCount,
    data: {
      reviews,
    },
  });
});

const createNewReview = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const { tourId } = req.params;
  const tour = await Tour.findById(tourId);
  if (!tour) throw new AppError('No such tour', 404);
  const { review, rating } = req.body;
  const newReview = await Review.create({
    review,
    rating,
    tour: tourId,
    user: userId,
  });
  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});

module.exports = { getAllReviews, getAllReviewsForATour, createNewReview };
