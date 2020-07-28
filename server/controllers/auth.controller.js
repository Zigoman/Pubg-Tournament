const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { promisify } = require('util');

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
    facebookURL: user.facebookURL,
    squad: user.squad
  });
});

exports.authenticateUser = async (req, res, next) => {
  let token;
  // check if authorization header exists
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    // if exists get the token
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('No Valid Token Found', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The user belonging to this token no longer exists', 401));
  }
  res.status(200).json({
    status: 'success',
    currentUser
  });
};

exports.protect = async (req, res, next) => {};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You dont have permission to perform this action', 403));
    }
  };
};
