//  As of now we don't need to delete the DB, but we're keeping the code for future reference in case.

// const mongoose = require('./connection');
// const Bookmark = require('../models/Bookmark');
// const User = require('../models/User');
// const bookmarkSeeds = require('./seeds.json');

// Bookmark.deleteMany({})
// 	.then(() => User.deleteMany({}))
// 	.then(() => {
// 		return User.create({ email: 'fake@email.com', name: 'Fake Person' })
// 			.then((user) =>
// 				bookmarkSeeds.map((bookmark) => ({ ...bookmark, owner: user._id }))
// 			)
// 			.then((bookmarks) => Bookmark.insertMany(bookmarks));
// 	})
// 	.then(console.log)
// 	.catch(console.error)
// 	.finally(() => {
// 		process.exit();
// 	});
