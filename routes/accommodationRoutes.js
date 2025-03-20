const express = require('express');
const { createAccommodation, getAccommodations, bookAccommodation } = require('../controllers/accommodationsController');
const { protect, restrictTo } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const accommodationSchema = require('../validation/accommodationValidation');

const router = express.Router();

router.get('/', getAccommodations);
router.post('/', protect, restrictTo('business_owner'), validate(accommodationSchema), createAccommodation);
router.post('/:id/bookings', protect, restrictTo('tourist'), bookAccommodation);

module.exports = router;