const express = require('express');
// const { populate } = require('../models/ArtItem');
// const router = express.Router();
const ArtItem = require('../models/ArtItem');

// Index: GET all the ArtItems

const getArtItems = async (req, res) => {
	try {
	  const artItem = await ArtItem.find({});
	  res.json(artItem);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: "Server Error" });
	}
  };

// Show: Get a ArtItem by ID

const getArtItemsById = async (req, res) => {
	try {
	  const artItem = await ArtItem.findById(req.params.id);
  
	  res.json(artItem);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: "Server Error" });
	}
  };

// Create: POST a ArtItem
// router.post('/', async (req, res, next) => {
// 	try {
// 		// 1. Use the data in the req body to create a new ArtItem
// 		const newArtItem = await ArtItem.create(req.body);
// 		// 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
// 		res.status(201).json(newArtItem);
// 	} catch (err) {
// 		// 3. If there was an error, pass it on!
// 		next(err);
// 	}
// });

// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedArtItem = await ArtItem.findByIdAndUpdate(
//             req.params.id,req.body, 
//         {
//             new: true}
//         )
//         if(updatedArtItem){
//             res.json(updatedArtItem)
//         } else {
//             res.sendStatus(404)
//         }
//     } catch(err){
//         next(err)
//     }
// })

// router.delete('/:id', async(req, res, next) => {
//     try {
//         const deletedArtItem = await ArtItem.findByIdAndDelete(req.params.id)
//         res.json(deletedArtItem) 
//     } catch(err) {
//         next(err)
//     }
// })

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = {getArtItems, getArtItemsById};
