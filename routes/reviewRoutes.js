const express = require('express');
const {
  createNewReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(protect, getAllReviews)
  .post(protect, restrictTo('user'), createNewReview);
router
  .route('/:reviewId')
  .patch(protect, restrictTo('user'), updateReview)
  .delete(protect, restrictTo('user'), deleteReview);
module.exports = router;
