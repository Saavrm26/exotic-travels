const express = require('express');
const {
  getAllReviewsForATour,
  createNewReview,
  getAllReviews,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/').get(getAllReviews);

router
  .route('/:tourId')
  .get(protect, getAllReviewsForATour)
  .post(protect, restrictTo('user'), createNewReview);
// router.route('/').post(createNewReview);

module.exports = router;
