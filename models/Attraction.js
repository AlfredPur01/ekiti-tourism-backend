const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

const attractionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  entryFee: { type: Number, required: true },
  images: [String],
  reviews: [reviewSchema],
}, { timestamps: true });

module.exports = mongoose.model('Attraction', attractionSchema);