const express = require('express');
const { signup, login, forgotPassword, resetPassword } = require('../controllers/authController');
const { validate } = require('../middleware/validate');
const { signupSchema, loginSchema } = require('../validation/authValidation');
const rateLimit = require('express-rate-limit');

const router = express.Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });

router.post('/signup', limiter, validate(signupSchema), signup);
router.post('/login', limiter, validate(loginSchema), login);
router.post('/forgot-password', limiter, forgotPassword);
router.patch('/reset-password/:token', resetPassword);

module.exports = router;