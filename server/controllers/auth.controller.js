const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const generateToken = user => {
  const payload = JSON.stringify(user);
  return jwt.sign(payload, process.env.JWT_SECRET);
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    pubgID: req.body.pubgID,
    pubgName: req.body.pubgName,
    facebookURL: req.body.facebookURL,
    admin: false,
    squad: req.body.squad || null
  });

  if (!newUser) {
    return next(new AppError('Could not add user to database, try again later', 500));
  }

  const user = {
    fullName: newUser.fullName,
    password: generateToken({ id: newUser._id, email: newUser.email }),
    id: newUser._id,
    pubgID: newUser.pubgID,
    pubgName: newUser.pubgName,
    facebookURL: newUser.facebookURL,
    admin: newUser.admin,
    squad: newUser.squad
  };

  return res.status(201).json(user);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('please provide email and password', 401));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  const token = generateToken({ email: user.email, id: user._id });
  res.status(200).json({
    fullName: user.fullName,
    password: token,
    email: user.email,
    id: user._id,
    pubgName: user.pubgName,
    pubgID: user.pubgID,
    admin: user.admin,
    facebookURL: user.facebookURL,
    squad: user.squad
  });
});

exports.check_token = catchAsync(async (req, res, next) => {
  const tokenPassword = req.body.token;
  // verify a token symmetric - synchronous
  const decoded = jwt.verify(tokenPassword, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new AppError('please login Again', 401));
  }
  const user = await User.findOne({ email: decoded.email });
  res.status(200).json({
    fullName: user.fullName,
    password: user.password,
    email: user.email,
    id: user._id,
    pubgName: user.pubgName,
    pubgID: user.pubgID,
    admin: user.admin,
    facebookURL: user.facebookURL,
    squad: user.squad
  });
});

exports.protect = async (req, res, next) => {};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You dont have permission to perform this action', 403));
    }
  };
};
