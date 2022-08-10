## Backend Explanation

CRUD for both an "artItem" database and a "Cart" database.  

## Technologies Used

- MongoDB
- Express
- Mongoose
- Node.js

## Schemas

ArtItem.js

```bash
	title: String,
	items: [{
		productId: Number,
		name: String,
		imageUrl: String,
		price: Number,
    }]
```

Cart.js

```bash
	items: {
		name: String,
		imageUrl: String,
		price: Number,
		quantity: Number,
    }
```











