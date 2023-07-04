const path = require('path');
const multer = require('multer');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const filterObject = require('../utils/filterObject');
const APIFeatures = require('../utils/apiFeatures');
const { deleteController, updateController } = require('./handlerFactory');

// multer upload destination
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), '/public/img/users/'));
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.user._id}-${Date.now()}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not a valid image type, only images allowed', 403));
  }
};

const upload = multer({ storage, fileFilter });
const uploadSinglePhoto = upload.single('photo');

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
  console.log(req.file);
  console.log(req.body);
  const filteredObject = filterObject(req.body, 'name', 'email');
  if (req.file) filteredObject.photo = req.file.filename;
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
  uploadSinglePhoto,
};
