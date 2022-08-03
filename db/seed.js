//  As of now we don't need to delete the DB, but we're keeping the code for future reference in case.

const mongoose = require('./connection');
const ArtItem = require('../models/ArtItem');
const User = require('../models/User');
const seed_data = require('./seed_data.json');

ArtItem.deleteMany({})
	.then(() => {
		ArtItem.insertMany(seed_data).then((artitem) => {
			console.log('We have Art 😋😋😋');
			console.log(artitem);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
