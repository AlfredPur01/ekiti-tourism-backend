const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  type: { type: String, enum: ['hotel', 'shortlet', 'bar'], required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  amenities: [String],
  images: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Accommodation', accommodationSchema);