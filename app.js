const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const DOMPurify = require('isomorphic-dompurify');
const hpp = require('hpp');

const app = express();
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const rateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1000, // Limit each IP to 1000 requests per `window` (
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Rate limit exceeded for this client',
});

const santizeObject = (obj) =>
  Object.keys(obj).reduce((accumulatedObject, key) => {
    accumulatedObject[key] = DOMPurify.sanitize(obj[key], {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
    return accumulatedObject;
  }, {});

const xssSanitize = (req, res, next) => {
  const sanitizedBody = santizeObject(req.body);
  const santizedParams = santizeObject(req.params);
  req.body = sanitizedBody;
  req.params = santizedParams;
  next();
};

// MIDDLEWARES

// security middleware
app.use(helmet());

// rate limiter middleware
app.use('/api', rateLimiter);

// logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// interprets body as json
app.use(express.json({ limit: '10kb' }));

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

// serving static files
app.use(express.static(`${__dirname}/public`));

// routing middleware
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// default route for unknown routes
app.all('*', (req, res, next) => {
  next(new AppError('Url requested was not found', 404));
});

// error handling middleware, all exceptions and errors are forwared here if 'next' function recieves an error object -- next(err)
app.use(globalErrorHandler);

module.exports = app;
