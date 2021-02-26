const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  cardNumber: {
    type: Number,
    require: true,
    trim: true,
  },
  spanishName: {
    type: String,
    require: true,
    trim: true,
  },
  englishName: {
    type: String,
    require: true,
    trim: true,
  },
  kanji: {
    type: String,
    trim: true,
  },
  Rōmaji: {
    type: String,
    trim: true,
  },
  appeardManga: {
    type: String,
    trim: true,
  },
  appeardAnime: {
    type: String,
    trim: true,
  },
  clowCard: {
    type: String,
    trim: true,
    require: true,
  },
  sakuraCard: {
    type: String,
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("Card", CardSchema);
