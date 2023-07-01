const Review = require('../models/reviewModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');

const getAllReviews = catchAsync(async (req, res, next) => {
  const filter = {};
  if (req.params.tourId && req.body.tourId)
    throw new AppError('multiple tour id found', 400);
  if (req.params.tourId) filter.tour = req.params.tourId;
  if (req.body.tourId) filter.tour = req.body.tourId;

  const query = Review.find(filter);
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
  if (req.params.tourId && req.body.tourId)
    throw new AppError('multiple tour id found', 400);
  req.body.user = req.user._id;
  if (req.params.tourId) req.body.tour = req.params.tourId;
  if (req.body.tourId) req.body.tour = req.body.tourId;

  if (req.body.tour) {
    const tour = await Tour.findById(req.body.tour);
    if (!tour) throw new AppError('No such tour', 404);
  }

  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});

const updateReview = catchAsync(async (req, res, next) => {
  if (req.body.tour && !(await Tour.exists({ _id: req.body.tour }))) {
    throw new AppError('No such tour exists');
  }
  // don't await this query as it is being awaited by a pre middleware, that is used to calculate average
  const updatedReview = await Review.findOneAndUpdate(
    {
      _id: req.params.reviewId,
      user: req.user._id,
    },
    req.body,
    { runValidators: true, new: true }
  );
  if (!updatedReview)
    throw new AppError(
      "Either review doesn't belong to user or review doesn't exists"
    );
  res.status(201).json({
    status: 'success',
    data: {
      review: updatedReview,
    },
  });
});

const deleteReview = catchAsync(async (req, res, next) => {
  const doc = await Review.findOneAndDelete({
    _id: req.params.reviewId,
    user: req.user._id,
  });
  if (!doc) {
    throw new AppError(
      "Either the review doesn't exists or it doesn't belong to the user",
      404
    );
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports = {
  getAllReviews,
  createNewReview,
  deleteReview,
  updateReview,
};
