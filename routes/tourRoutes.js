const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getTourStats,
  getMonthyPlan,
} = require('../controllers/tourController');
const { protect, restrictTo } = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();
router.use('/:tourId/reviews', reviewRouter);

router.route('/').get(protect, getAllTours).post(createTour);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthyPlan);
router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin'), deleteTour);

module.exports = router;
