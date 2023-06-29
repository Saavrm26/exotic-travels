const express = require('express');
const {
  getAllUsers,
  getUser,
  deleteMe,
  updateMe,
} = require('../controllers/userController');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require('../controllers/authController');

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/forgotPassword').post(forgotPassword);
router.route('/updatePassword').patch(protect, updatePassword);
router.route('/updateMe').patch(protect, updateMe);
router.route('/deleteMe').delete(protect, deleteMe);
router.route('/:id').get(getUser);
router.route('/resetPassword/:token').patch(resetPassword);

module.exports = router;
