const express = require('express');
const { getProfile, uploadPhoto } = require('../controllers/usersController');
const { protect } = require('../middleware/auth');
const uploadImage = require('../middleware/upload');

const router = express.Router();

router.get('/me', protect, getProfile);
router.patch('/upload-photo', protect, uploadImage, uploadPhoto);

module.exports = router;