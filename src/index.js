const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');
const routes = require('./routes/routes');
const Product = require('./models/productModel');

const app = express();
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB
connectDB();

// Use API routes
app.use('/api', routes);

// New POST route to fetch products by names
app.post('/api/fetch-products', async (req, res) => {
  try {
    const { productNames } = req.body;
    const products = await Product.find({ name: { $in: productNames } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
