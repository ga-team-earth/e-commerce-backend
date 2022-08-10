const Order = require('../models/Order');
const Cart = require('../models/Cart');
const ArtItem = require('../models/ArtItem');
const router = require('./ArtItemController');
const { model } = require('mongoose');


// exports.createorder = (async (req, res, next) => {
//     const {cartItems} = req.body
  
//   })

// All Orders
router.get('/', async(req, res, next) => {
    await Order.find({}).then(order => res.json(order));
})

// Single Order Details
router.get('/:id', async (req, res, next) => {
    const order = await Order.findById(req.params.id)
        res.status(200).json({
            success:true,
                order
    })
})

// Delete Order 
router.delete('/:id', async(req, res, next) => {
    const order = await Order.findById(req.params.id)
        await order.remove()
            res.status(200).json({
                success:true,
   })
})

// Order Post?

router.post('/', async (req, res, next) => {
	try {
		const order = await Order.create(req.body);
		    res.status(201).json(order)
	    } catch (err) {
		    next(err);
	}
});

// Patch Order
router.patch('/:id', async (req, res, next) => {
    try {
        const updatedOrderItem = await Order.findByIdAndUpdate(
            req.params.id,
			req.body, 
    		{
            new: true
			}
        )
        if(updatedOrderItem){
            res.json(updatedOrdeItem)
        } else {
            res.sendStatus(404)
        }
    } catch(err){
        next(err)
    }
})





module.exports = router;