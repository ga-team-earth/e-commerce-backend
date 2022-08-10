const mongoose = require('../db/connection')

const OrderSchema = new mongoose.Schema({

    orderItems: {
        type: Object,
        ref: "CartItem",
    },
		name: String,
		price: Number,
		quantity: Number,
        image: String,
        
        orderTotal: Number,

    createdAt:{
        type:Date,
        default: Date.now
    },
    
    paymentInfo:{
        status: String,
    },
	}
);

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;