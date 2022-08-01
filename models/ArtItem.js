const mongoose = require('../db/connection')

const ArtItemSchema = new mongoose.Schema({

	id: Number,
	section: String,
	title: String,
	description: String,
	imageUrl: String,
	price: Number

	}
);

const ArtItem = mongoose.model('ArtItem', ArtItemSchema);

module.exports = ArtItem;
