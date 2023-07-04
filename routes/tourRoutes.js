const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getTourStats,
  getMonthyPlan,
  uploadPhotos,
  resizePhotos,
  parseStringifiedArrays,
} = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();
router.use('/:tourId/reviews', reviewRouter);

router
  .route('/')
  .get(getAllTours)
  .post(
    protect,
    restrictTo('guide', 'lead-guide', 'admin'),
    uploadPhotos,
    resizePhotos,
    parseStringifiedArrays,
    createTour
  );
router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthyPlan);
router
  .route('/:id')
  .get(getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    uploadPhotos,
    resizePhotos,
    parseStringifiedArrays,
    updateTour
  )
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
