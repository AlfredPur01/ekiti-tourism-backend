const Accommodation = require('../models/Accommodation');
const Booking = require('../models/Booking');

const createAccommodation = async (req, res) => {
  const accommodation = await Accommodation.create({ ...req.body, owner: req.user.id });
  res.status(201).json(accommodation);
};

const getAccommodations = async (req, res) => {
  const { type, minPrice, maxPrice, location } = req.query;
  const query = {};
  if (type) query.type = type;
  if (minPrice) query.price = { $gte: minPrice };
  if (maxPrice) query.price = { ...query.price, $lte: maxPrice };
  if (location) query.location = { $regex: location, $options: 'i' };

  const accommodations = await Accommodation.find(query);
  res.json(accommodations);
};

const bookAccommodation = async (req, res) => {
  const { accommodationId, checkIn, checkOut } = req.body;
  const accommodation = await Accommodation.findById(accommodationId);
  if (!accommodation) return res.status(404).json({ message: 'Accommodation not found' });

  const totalPrice = accommodation.price * ((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
  const booking = await Booking.create({
    accommodation: accommodationId,
    user: req.user.id,
    checkIn,
    checkOut,
    totalPrice,
  });

  // Mock Flutterwave payment integration
  console.log('Mock payment processed via Flutterwave');
  res.status(201).json(booking);
};

module.exports = { createAccommodation, getAccommodations, bookAccommodation };