const express = require('express');
const {
  getOverview,
  getTourView,
  getLoginPage,
} = require('../controllers/viewController');
const { protect } = require('../controllers/authController');

const router = express.Router();

router.get('/', getOverview);
router.get('/login', getLoginPage);
router.get('/tour/:tourSlug', protect, getTourView);

module.exports = router;
