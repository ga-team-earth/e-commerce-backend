const mongoose = require('../db/connection')

const CartSchema = new mongoose.Schema({

	category: String,
	title: String,
	price: Number,
	image: String

});

const Cart = mongoose.model('CartSchema', CartSchema);

module.exports = Cart;
