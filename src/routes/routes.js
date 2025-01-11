const express = require('express');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const { createOrder, getAllOrders } = require('../controllers/orderController');

const router = express.Router();

// Product routes
router.post('/products', createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// Order routes
router.post('/orders', createOrder);
router.get('/orders', getAllOrders);

module.exports = router;
