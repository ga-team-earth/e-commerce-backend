const mongoose = require('../db/connection')

const ArtItemSchema = new mongoose.Schema({


	title: String,
	items: [{
		productId: Number,
		name: String,
		imageUrl: String,
		price: Number,
}]
	}
);

const ArtItem = mongoose.model('ArtItem', ArtItemSchema);

module.exports = ArtItem;
