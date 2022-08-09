const express = require('express')
const {
  addItemToCart,
  deleteItemInCart,
  getCartItems,
} = require('../controllers/CartController')
// const {verifyUser} = require('../middleware/middleware')
const router = express.Router()

router
  .route('/')
  .get(getCartItems)
  .post(addItemToCart)

router.route('/:id').delete(deleteItemInCart)

module.exports = router