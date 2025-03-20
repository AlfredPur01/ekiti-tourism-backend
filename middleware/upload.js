const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = require('../config/config');

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadImage = async (req, res, next) => {
  try {
    if (!req.files || !req.files.image) return next();
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
    req.body.imageUrl = result.secure_url;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Image upload failed' });
  }
};

module.exports = uploadImage;