
const mongoose = require('../db/connection');

const ArtItemSchema = new mongoose.Schema({

	category: String,
	title: String,
	price: Number,
	image: String

});

const ArtItem = mongoose.model('ArtItem', ArtItemSchema);

module.exports = ArtItem;
