const express = require('express');
const {
  createNewReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });
router.use(protect);
router.route('/').get(getAllReviews).post(restrictTo('user'), createNewReview);
router
  .route('/:reviewId')
  .patch(restrictTo('user'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);
module.exports = router;
