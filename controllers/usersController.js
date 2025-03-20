const User = require('../models/User');

const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

const uploadPhoto = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.profileImage = req.body.imageUrl;
  await user.save();
  res.json({ message: 'Photo uploaded', profileImage: user.profileImage });
};

module.exports = { getProfile, uploadPhoto };