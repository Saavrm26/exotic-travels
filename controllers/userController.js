const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');
const APIFeatures = require('../utils/apiFeatures');
const { deleteController, updateController } = require('./handlerFactory');

const getAllUsers = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const users = await features.query;
  const userCount = await features.query.clone().countDocuments();
  res.status(200).json({
    status: 'success',
    results: userCount,
    data: {
      users,
    },
  });
});

const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw new AppError('No tours found with that ID', 404);
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});

const updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm)
    throw new AppError("This route doesn't updates password", 400);
  const filteredObject = filterObject(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    filteredObject,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    status: 'success',
    data: {
      updatedUser,
    },
  });
});

const updateUser = updateController(User, 'id', 'body');

const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: 'success',
  });
});

const deleteUser = deleteController(User, 'id');

module.exports = {
  getAllUsers,
  getUser,
  getMe,
  updateMe,
  updateUser,
  deleteMe,
  deleteUser,
};
