const express = require('express');
// const router = express.Router();
const Cart = require('../models/Cart');

// Show: Get ALL Cart items

const getCartItems = async (req, res) => {
	try {
	  const cartItem = await Cart.populate('productId')
	  // console.log(cartItem)
	  res.status(200).send({status: 'ok', cartItem})
	} catch (err) {
	  console.log(err)
	  sendResponseError(500, `Error ${err}`, res)
	}
  }

// Show: Get a Cart item by ID
// router.get('/:id', async (req, res, next) => {
// 	try {
// 		const cartitem = await Cart.findById(req.params.id);
// 		res.json(cartitem);
// 	} catch (err) {
// 		next(err);
// 	}
// });

// Create: POST a Cart item

const addItemToCart = async (req, res) => {
	const {productId, quantity} = req.body
	try {
	  const cartItem = await Cart.findOneAndUpdate(
		{productId},
		{productId, quantity},
		{upsert: true},
	  )
  
	  res.status(201).send({status: 'ok', cartItem})
	} catch (err) {
	  console.log(err)
	  sendResponseError(500, `Error ${err}`, res)
	}
  }
// Update Cart Item by ID
// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedCartItem = await Cart.findByIdAndUpdate(
//             req.params.id,req.body, 
//         {
//             new: true}
//         )
//         if(updatedCartItem){
//             res.json(updatedCartItem)
//         } else {
//             res.sendStatus(404)
//         }
//     } catch(err){
//         next(err)
//     }
// })

// Route for deleting cart item by ID
const deleteItemInCart = async (req, res) => {
	try {
	  await Cart.findByIdAndRemove(req.params.id)
	  res.status(200).send({status: 'ok'})
	} catch (err) {
	  console.log(err)
	  sendResponseError(500, `Error ${err}`, res)
	}
  }

// Route for deleting ALL
// router.delete('/', async(req, res, next) => {
// 	try {
// 		Cart.deleteMany({})		
// 	} catch(err) {
// 		next(err)
// 	}
// })

<<<<<<< HEAD
module.exports = router;
=======
module.exports = {getCartItems, addItemToCart, deleteItemInCart};
>>>>>>> 6fd720c (alternate backend, not working)
