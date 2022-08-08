const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Show: Get ALL Cart items
router.get('/', async (req, res, next) => {
	try {
		const cartitems = await Cart.find({});
		res.json(cartitems);
		console.log(cartitems)
	} catch (err) {
		next(err);
	}
});

// Show: Get a Cart item by ID
router.get('/:id', async (req, res, next) => {
	try {
		const cartitem = await Cart.findById(req.params.id);
		res.json(cartitem);
	} catch (err) {
		next(err);
	}
});

// Create: POST a Cart item
router.post('/', async (req, res, next) => {
	try {
		// 1. Use the data in the req body to create a new ArtItem
		const cart = await Cart.create(req.body);
		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
		res.status(201).json(cart);
	} catch (err) {
		next(err);
	}
});

// Update Cart Item by ID
router.put('/:id', async (req, res, next) => {
    try {
        const updatedCartItem = await Cart.findByIdAndUpdate(
            req.params.id,req.body, 
        {
            new: true}
        )
        if(updatedCartItem){
            res.json(updatedCartItem)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

// Route for deleting cart item by ID
router.delete('/:id', async(req, res, next) => {
    try {
        const deletedCartItem = await Cart.findByIdAndDelete(req.params.id)
        res.json(deletedCartItem) 
    } catch(err) {
        next(err)
    }
})

// Route for deleting All 

router.delete('/', async(req, res, next) => {
	try {
		Cart.deleteMany({})		
	} catch(err) {
		next(err)
	}
})

module.exports = router;
