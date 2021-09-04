const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAll = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    return next(new AppError('Could not get users, try again later', 404));
  }
  res.status(200).json({
    status: 'success',
    data: users
  });
});
