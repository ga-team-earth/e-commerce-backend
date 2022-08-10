const express = require('express');
const { populate } = require('../models/ArtItem');
const router = express.Router();
const ArtItem = require('../models/ArtItem');

// Index: GET all the ArtItems
router.get('/', async (req, res, next) => {
	try {
		const artItems = await ArtItem.find({});
		res.json(artItems);
	} catch (err) {
		next(err);
	}
});

// Show: Get a ArtItem by ID
router.get('/:id', async (req, res, next) => {
	try {
		const artItems = await ArtItem.findById(req.params.id);
		res.json(artItems);
	} catch (err) {
		next(err);
	}
});

// Create: POST a ArtItem
router.post('/', async (req, res, next) => {
	try {
		const newArtItem = await ArtItem.create(req.body);
		res.status(201).json(newArtItem);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async(req, res, next) => {
    try {
        const deletedArtItem = await ArtItem.findByIdAndDelete(req.params.id)
        res.json(deletedArtItem) 
    } catch(err) {
        next(err)
    }
})

module.exports = router;
