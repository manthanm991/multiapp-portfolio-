const { body, param, query, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatted = errors.array().map(err => ({
      field: err.param,
      message: err.msg,
      value: err.value
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: formatted
    });
  }
  next();
};

const mongoIdParam = (paramName = 'id') => [
  param(paramName)
    .isMongoId()
    .withMessage(`Invalid ${paramName}`)
];

const paginationQuery = () => [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer')
    .toInt(),

  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100')
    .toInt(),

  query('sort')
    .optional()
    .isIn(['createdAt', '-createdAt', 'updatedAt', '-updatedAt', 'title', '-title'])
    .withMessage('Invalid sort option')
];

const searchQuery = () => [
  query('q')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Search query must be between 1 and 100 characters')
    .escape(),

  query('category')
    .optional()
    .trim()
    .isIn(['personal', 'work', 'study', 'important', 'other'])
    .withMessage('Invalid category')
];

const newsQuery = () => [
  query('category')
    .optional()
    .trim()
    .isIn(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'])
    .withMessage('Invalid news category'),

  query('country')
    .optional()
    .trim()
    .isLength({ min: 2, max: 2 })
    .withMessage('Country code must be 2 characters')
    .isAlpha()
    .withMessage('Country code must contain only letters'),

  query('page')
    .optional()
    .isInt({ min: 1, max: 20 })
    .withMessage('Page must be between 1 and 20')
    .toInt(),

  query('pageSize')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Page size must be between 1 and 100')
    .toInt()
];

const contactForm = () => [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail(),

  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be between 5 and 200 characters')
    .escape(),

  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
    .escape()
];

const fileUpload = () => [
  body('fileName')
    .optional()
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage('File name must be between 1 and 255 characters')
    .matches(/^[a-zA-Z0-9._-]+$/)
    .withMessage('File name can only contain letters, numbers, dots, underscores, and hyphens')
];

const sanitizeHtml = (field) => [
  body(field)
    .trim()
    .escape()
    .customSanitizer(value => value.replace(/<[^>]*>/g, ''))
];

const customValidation = (validationFn, errorMessage) => [
  body().custom((value, { req }) => {
    if (!validationFn(value, req)) {
      throw new Error(errorMessage);
    }
    return true;
  })
];

module.exports = {
  handleValidationErrors,
  mongoIdParam,
  paginationQuery,
  searchQuery,
  newsQuery,
  contactForm,
  fileUpload,
  sanitizeHtml,
  customValidation
};