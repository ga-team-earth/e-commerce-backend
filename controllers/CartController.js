const express = require('express');
const { populate } = require('../models/ArtItem');
const router = express.Router();
const Cart = require('../models/Cart');

// Index: GET all the Cart items
router.get('/', async (req, res, next) => {
	try {
		// 1. Get all of the CartItem from the DB
		const Cart = await Cart.find({});
		// 2. Send them back to the client as JSON
		res.json(Cart);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
});

// Show: Get a Cart item by ID
router.get('/:id', async (req, res, next) => {
	try {
		// 1. Find the ArtItem by its unique ID
		const cart = await Cart.findById(req.params.id);
		// 2. Send it back to the client as JSON
		res.json(cart);
	} catch (err) {
		// if there's an error, pass it on!
		next(err);
	}
});

// Create: POST a Cart item
router.post('/', async (req, res, next) => {
	try {
		// 1. Use the data in the req body to create a new ArtItem
		const cart = await ArtItem.create(req.body);
		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
		res.status(201).json(cart);
	} catch (err) {
		// 3. If there was an error, pass it on!
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,req.body, 
        {
            new: true}
        )
        if(updatedCart){
            res.json(updatedCart)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
        res.json(deletedCart) 
    } catch(err) {
        next(err)
    }
})

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
