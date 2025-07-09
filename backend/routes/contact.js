const express = require('express');
const { contactForm } = require('../utils/validators/contactValidators');
const { contactFormSubmission } = require('../controllers/contactController');
const { handleValidationErrors } = require('../utils/validators/validators');
const router = express.Router();

router.post('/contact_form', contactForm(), handleValidationErrors ,contactFormSubmission);

module.exports = router;