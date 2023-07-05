const express = require('express');
const bodyParser = require('body-parser');
const { protect, restrictTo } = require('../controllers/authController');
const {
  createCheckoutSession,
  postCheckOut,
  getAllBookings,
  getBooking,
} = require('../controllers/bookingsConroller');

const router = express.Router();

router.get('/checkout-session/:tourId', protect, createCheckoutSession);
router.post(
  '/checkout-session',
  bodyParser.raw({ type: 'application/json' }),
  postCheckOut
);

router.use(
  protect,
  restrictTo('admin', 'guide', 'lead-guide'),
  express.json({ limit: '50kb' })
);
router.get('/', getAllBookings);
router.get('/:id', getBooking);

module.exports = router;
