const path = require('path');
const multer = require('multer');
const sharp = require('sharp');
const Tour = require('../models/tourModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { deleteController, updateController } = require('./handlerFactory');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not a valid image type, only images allowed', 403));
  }
};

const upload = multer({ storage, fileFilter });
const uploadPhotos = upload.fields([
  { name: 'images', maxCount: 3 },
  { name: 'imageCover', maxCount: 1 },
]);

const resizePhotos = catchAsync(async (req, res, next) => {
  const resize = async (file) => {
    const filename = `tour-${req.body.name}-${
      file.fieldname
    }-${Date.now()}.jpeg`;
    const dest = path.resolve(
      path.join(process.cwd(), '/public/img/tours/'),
      filename
    );
    await sharp(file.buffer)
      .resize(2000, 1333)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(dest);
    return filename;
  };

  if (req.files) {
    if (req.files.imageCover) {
      req.body.imageCover = await resize(req.files.imageCover[0]);
    }
    if (req.files.images) {
      const promiseArray = req.files.images.map((file, i) => {
        file.fieldname += `-${i}`;
        return resize(file);
      });
      req.body.images = await Promise.all(promiseArray);
    }
  }
  // iterating over all file fields present in the request
  next();
});

const parseStringifiedArrays = (req, res, next) => {
  if (req.body.guides) req.body.guides = JSON.parse(req.body.guides);
  if (req.body.locations) req.body.locations = JSON.parse(req.body.locations);
  if (req.body.startDates)
    req.body.startDates = JSON.parse(req.body.startDates);
  next();
};

const getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const tours = await features.query;
  const tourCount = await features.query.clone().countDocuments();
  // 2) Sending the result
  res.status(200).json({
    status: 'success',
    results: tourCount,
    data: {
      tours,
    },
  });
});

const getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id).populate({
    path: 'reviews',
    select: 'tour user review rating',
  });
  if (!tour) {
    throw new AppError('No tours found with that ID', 404);
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

const createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
});

const updateTour = updateController(Tour, 'id', 'body');

const deleteTour = deleteController(Tour, 'id');
const getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    { $match: { ratingsAverage: { $gte: 4.5 } } },
    {
      $group: {
        _id: '$difficulty',
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        numRatings: { $sum: '$ratingsQuantity' },
        numberOfTours: { $sum: 1 },
      },
    },
    { $sort: { avgPrice: 1, avgRating: -1 } },
  ]);
  res.status(200).json({
    status: 'success',
    data: stats,
  });
});

const getMonthyPlan = catchAsync(async (req, res, next) => {
  const { year } = req.params;
  const plan = await Tour.aggregate([
    { $unwind: '$startDates' },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        tours: {
          $push: { name: '$name', startDate: '$startDates' },
        },
      },
    },
    {
      $sort: { numTourStarts: -1 },
    },
    {
      $project: {
        _id: 0,
        month: '$_id',
        numTourStarts: 1,
        tours: 1,
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: plan,
  });
});

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  uploadPhotos,
  resizePhotos,
  parseStringifiedArrays,
  getTourStats,
  getMonthyPlan,
};
