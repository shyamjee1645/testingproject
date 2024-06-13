const express = require("express");
const router = express.Router();
const { getAllProducts, getOneProduct, postProduct,partiallyUpdateProduct,deleteProduct } = require('../controllers/productController.js');

// Getting All Products
router.get('/', getAllProducts);

// Getting One Product
router.get('/:id', getOneProduct);

// Posting a Product
router.post('/', postProduct);

router.patch('/:id', partiallyUpdateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
