const mongoose = require('../db/connection')

const CartSchema = new mongoose.Schema({

	items: {
		name: String,
		imageUrl: String,
		price: Number,
		quantity: Number,
}
	}
);

const Cart = mongoose.model('CartItem', CartSchema);

module.exports = Cart;