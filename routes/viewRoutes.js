const express = require('express');
const {
  getOverview,
  getTourView,
  getLoginPage,
  getUserAccount,
  updateUserData,
} = require('../controllers/viewController');
const { protect, isLoggedIn } = require('../controllers/authController');

const router = express.Router();

router.get('/me', protect, getUserAccount);
router.get('/updateUserData', protect, updateUserData);
router.get('/tour/:tourSlug', protect, getTourView);

router.use(isLoggedIn);
router.get('/', getOverview);
router.get('/login', getLoginPage);

module.exports = router;
