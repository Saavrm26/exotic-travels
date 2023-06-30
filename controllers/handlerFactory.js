const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// ...resource/:resourceId
const deleteController = (Model, resourceId) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params[resourceId]);
    if (!doc) {
      throw new AppError('No documents found with that ID', 404);
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });

// ...resource/:resourceId
const updateController = (Model, resourceId, updatedResource) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(
      req.params[resourceId],
      req[updatedResource],
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      throw new AppError('No documents found with that ID', 404);
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

module.exports = { deleteController, updateController };
