const { body, param, query } = require('express-validator');

const createNote = () => [
  body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters')
    .escape(),

  body('description')
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Description must be between 1 and 2000 characters')
    .escape(),

  body('tag')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Tag must not exceed 50 characters')
    .escape(),

  body('category')
    .optional()
    .trim()
    .isIn(['personal', 'work', 'study', 'important', 'other'])
    .withMessage('Category must be one of: personal, work, study, important, other')
];

const updateNote = () => [
  param('id')
    .isMongoId()
    .withMessage('Invalid note ID'),

  body('title')
    .optional()
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters')
    .escape(),

  body('description')
    .optional()
    .trim()
    .isLength({ min: 1, max: 2000 })
    .withMessage('Description must be between 1 and 2000 characters')
    .escape(),

  body('tag')
    .optional()
    .trim()
    .isLength({ max: 50 })
    .withMessage('Tag must not exceed 50 characters')
    .escape(),

  body('category')
    .optional()
    .trim()
    .isIn(['personal', 'work', 'study', 'important', 'other'])
    .withMessage('Category must be one of: personal, work, study, important, other')
];

module.exports = {
  createNote,
  updateNote
};