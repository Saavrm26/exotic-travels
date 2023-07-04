const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

const getTourView = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.tourSlug }).populate({
    path: 'reviews',
    select: 'tour user review rating',
  });
  if (!tour) throw new AppError('No such tour');
  res.status(200).render('tour', {
    title: tour.name,
    tour,
  });
});

const getLoginPage = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login',
  });
});

const getUserAccount = catchAsync(async (req, res, next) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
});

const updateUserData = catchAsync(async (req, res, next) => {});

module.exports = {
  getOverview,
  getTourView,
  getLoginPage,
  getUserAccount,
  updateUserData,
};
