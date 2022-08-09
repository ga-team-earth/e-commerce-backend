const mongoose = require('../db/connection')

const cartSchema = new mongoose.Schema({
	products: [{
	productId: {
		type: mongoose.Types.ObjectId,
		ref: 'artItem',
		required: true,
	  },
	  quantity: {
		type: String,
		required: true,
	  },
	},
	],
	cartTotal: Number,

<<<<<<< HEAD

	title: String,
	items: [{
		productId: Number,
		name: String,
		imageUrl: String,
		price: Number,
		quantity: Number,
}]
	}
);
=======
>>>>>>> 6fd720c (alternate backend, not working)

const Cart = mongoose.model('CartItem', CartSchema);

<<<<<<< HEAD
module.exports = Cart;
=======
const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;
>>>>>>> 6fd720c (alternate backend, not working)
