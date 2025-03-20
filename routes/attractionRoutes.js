const express = require('express');
const { createAttraction, getAttractions, addReview } = require('../controllers/attractionsController');
const { protect, restrictTo } = require('../middleware/auth');
const { validate } = require('../middleware/validate');
const attractionSchema = require('../validation/attractionValidation');

const router = express.Router();

router.get('/', getAttractions);
router.post('/', protect, restrictTo('admin'), validate(attractionSchema), createAttraction);
router.post('/:attractionId/reviews', protect, addReview);

module.exports = router;