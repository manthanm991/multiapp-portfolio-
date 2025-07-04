const { body, param } = require('express-validator');

const userRegistration = () => [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('Email must not exceed 100 characters'),

  body('password')
    .isLength({ min: 8, max: 128 })
    .withMessage('Password must be between 8 and 128 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage('Password must contain at least one uppercase, lowercase, number, and special character')
];

const userLogin = () => [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const userForgotPassword = () => [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail()
];

const userResetPassword = () => [
  param('token')
    .notEmpty()
    .withMessage('Reset token is required'),

  body('password')
    .isLength({ min: 8, max: 128 })
    .withMessage('Password must be between 8 and 128 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage('Password must contain at least one uppercase, lowercase, number, and special character')
];

const googleCallbackValidator = () => [
  body('credential')
    .notEmpty()
    .withMessage('Google credential (ID token) is required')
    .isJWT()
    .withMessage('Invalid Google credential format')
];

module.exports = {
  userRegistration,
  userLogin,
  userForgotPassword,
  userResetPassword,
  googleCallbackValidator
};
