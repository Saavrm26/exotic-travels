const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Booking = require('../models/bookingModel');
const Tour = require('../models/tourModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');

const createCheckoutSession = catchAsync(async (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}`;
  const tour = await Tour.findById(req.params.tourId);
  if (!tour) {
    throw new AppError('No such tour', 404);
  }
  const session = await stripe.checkout.sessions.create({
    payment_intent_data: {
      metadata: {
        userId: req.user._id.toString(),
        tourId: req.params.tourId.toString(),
      },
    },
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: tour.name,
          },
          unit_amount: tour.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    invoice_creation: {
      enabled: true,
    },
    success_url: `${url}/successful-payment.html`,
    cancel_url: `${url}/unsuccessful-payment.html`,
    customer_email: req.user.email,
  });
  res.status(200).json({
    status: 'success',
    data: {
      url: session.url,
    },
  });
});

const postCheckOut = async (req, res, next) => {
  const payload = req.body;
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_KEY
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  res.status(200).end();
  const { type } = event;
  if (type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    const { tourId, userId } = paymentIntent.metadata;
    await Booking.create({
      tour: tourId,
      user: userId,
      customerId: paymentIntent.customer,
      price: paymentIntent.amount_received / 100,
    });
  } else if (type === 'invoice.created') {
    const name = event.data.object.customer_name;
    const email = event.data.object.customer_email;
    const invoiceURL = event.data.object.invoice_pdf;
    await new Email({ name, email }, invoiceURL).sendPaymentSuccess();
  }
};

const getAllBookings = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Booking.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const bookings = await features.query;
  const bookingsCount = await features.query.clone().countDocuments();
  // 2) Sending the result
  res.status(200).json({
    status: 'success',
    results: bookingsCount,
    data: {
      bookings,
    },
  });
});

const getBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id)
    .populate('user')
    .populate('tour');
  if (!booking) {
    throw new AppError('No bookings found with that ID', 404);
  }
  res.status(200).json({
    status: 'success',
    data: {
      booking,
    },
  });
});

module.exports = {
  createCheckoutSession,
  postCheckOut,
  getAllBookings,
  getBooking,
};
