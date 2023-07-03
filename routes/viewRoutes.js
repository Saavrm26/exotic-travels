const express = require('express');
const {
  getOverview,
  getTourView,
  getLoginPage,
} = require('../controllers/viewController');
const { protect, isLoggedIn } = require('../controllers/authController');

const router = express.Router();
router.use(isLoggedIn);
router.get('/', getOverview);
router.get('/login', getLoginPage);
router.get('/tour/:tourSlug', protect, getTourView);

module.exports = router;
