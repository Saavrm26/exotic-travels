const express = require('express');
const {
  getAllUsers,
  getUser,
  deleteMe,
  updateMe,
  deleteUser,
  updateUser,
  getMe,
} = require('../controllers/userController');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
} = require('../controllers/authController');

const router = express.Router();

router.route('/').get(protect, restrictTo('admin'), getAllUsers);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/forgotPassword').post(forgotPassword);
router.route('/updatePassword').patch(protect, updatePassword);
router.route('/me').patch(protect, getMe);
router.route('/updateMe').patch(protect, updateMe);
router.route('/deleteMe').delete(protect, deleteMe);
router
  .route('/:id')
  .get(protect, restrictTo('admin'), getUser)
  .patch(protect, restrictTo('admin'), updateUser)
  .delete(protect, restrictTo('admin'), deleteUser);
router.route('/resetPassword/:token').patch(resetPassword);

module.exports = router;
