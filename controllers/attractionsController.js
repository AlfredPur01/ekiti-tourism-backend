const Attraction = require('../models/Attraction');

const createAttraction = async (req, res) => {
  const attraction = await Attraction.create(req.body);
  res.status(201).json(attraction);
};

const getAttractions = async (req, res) => {
  const attractions = await Attraction.find();
  res.json(attractions);
};

const addReview = async (req, res) => {
  const { attractionId } = req.params;
  const { rating, comment } = req.body;
  const attraction = await Attraction.findById(attractionId);
  if (!attraction) return res.status(404).json({ message: 'Attraction not found' });

  attraction.reviews.push({ user: req.user.id, rating, comment });
  await attraction.save();
  res.status(201).json(attraction);
};

module.exports = { createAttraction, getAttractions, addReview };