const express = require('express');
const router = express.Router();
const { createuser, login, getAllUsers, getUser, googleCallback, forgotPassword, resetPassword } = require('../controllers/authControllers');
const verify = require('../middlewares/authMiddleware');
const { userRegistration, userLogin, userForgotPassword, userResetPassword, googleCallbackValidator } = require('../utils/validators/authValidators');
const { handleValidationErrors, mongoIdParam, paginationQuery } = require('../utils/validators/validators');

router.post('/createuser', userRegistration(), handleValidationErrors, createuser);

router.post('/login', userLogin(), handleValidationErrors, login);

router.post('/forgot-password', userForgotPassword(), handleValidationErrors, forgotPassword);

router.post('/reset-password/:token',userResetPassword(), handleValidationErrors, resetPassword);

router.post('/callback', googleCallbackValidator(), handleValidationErrors, googleCallback);

router.get('/users', verify, paginationQuery(), handleValidationErrors, getAllUsers);

router.get('/user', verify, handleValidationErrors, getUser);

module.exports = router;