const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const DOMPurify = require('isomorphic-dompurify');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1000, // Limit each IP to 1000 requests per `window` (
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Rate limit exceeded for this client',
});
const sanitizeOptions = {
  ALLOWED_TAGS: [],
  ALLOWED_ATTR: [],
};
const isNumber = (x) => typeof x === 'number';
const isString = (x) => typeof x === 'string' || x instanceof String;
const isArray = (x) => x.constructor === Array;
const isObject = (x) => x instanceof Object;

const santizeObject = function (obj) {
  return Object.keys(obj).reduce((accumulatedObject, key) => {
    if (isNumber(obj[key])) accumulatedObject[key] = obj[key];
    else if (isString(obj[key]))
      accumulatedObject[key] = DOMPurify.sanitize(obj[key], sanitizeOptions);
    else if (isArray(obj[key]))
      // eslint-disable-next-line no-use-before-define
      accumulatedObject[key] = sanitizeArray(obj[key]);
    else if (isObject(obj[key]))
      accumulatedObject[key] = santizeObject(obj[key]);
    return accumulatedObject;
  }, {});
};

const sanitizeArray = function (arr) {
  return arr.map((element) => {
    if (isNumber(element)) return element;
    if (isString(element)) return DOMPurify.sanitize(element, sanitizeOptions);
    if (isArray(element)) {
      sanitizeArray(element);
      return element;
    }
    return santizeObject(element);
  });
};

const xssSanitize = (req, res, next) => {
  try {
    if (req.body && Object.keys(req.body).length !== 0)
      req.body = JSON.parse(
        DOMPurify.sanitize(JSON.stringify(req.body), sanitizeOptions)
      );
    if (req.query && Object.keys(req.query).length !== 0)
      req.query = JSON.parse(
        DOMPurify.sanitize(JSON.stringify(req.query), sanitizeOptions)
      );
  } catch (err) {
    return next(err);
  }

  next();
};

// MIDDLEWARES

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// security middleware
if (process.env.NODE_ENV === 'development') {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'ws://localhost:*'],
        },
      },
    })
  );
} else app.use(helmet());
// rate limiter middleware
app.use('/api', rateLimiter);

// logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// interprets body as json
app.use(cookieParser());
app.use(compression());
app.use('/api/v1/bookings', bookingRoutes);

// parse the body json
app.use(express.json({ limit: '50kb' }));
// sanitize the body to remove all possible xss scripts/html
app.use(xssSanitize);

// sanitize the body to prevent NOSQL injections
app.use(mongoSanitize());

// remove parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'difficulty',
      'ratingsAverage',
      'ratingsQuantity',
      'maxGroupSize',
      'price',
    ],
  })
);

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// routing middleware

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/', viewRouter);

// default route for unknown routes
app.all('*', (req, res, next) => {
  next(new AppError('Url requested was not found', 404));
});

// error handling middleware, all exceptions and errors are forwared here if 'next' function recieves an error object -- next(err)
app.use(globalErrorHandler);

module.exports = app;
