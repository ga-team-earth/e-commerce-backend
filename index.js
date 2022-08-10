//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
const app = express();
const cors = require('cors') 
app.set('port', process.env.PORT || 8000);

//=============================================================================
// Middleware
//=============================================================================
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================
// Redirect

app.get('/', (req, res) => {
	res.redirect('/art');
});

/* START CONTROLLERS HERE */

const ArtItemController = require('./controllers/ArtItemController');
app.use('/art', ArtItemController);

const CartController = require('./controllers/CartController');
app.use('/cart', CartController);

/* END CONTROLLERS HERE */

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).send(message);
});

//=============================================================================
// START SERVER
//=============================================================================
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});