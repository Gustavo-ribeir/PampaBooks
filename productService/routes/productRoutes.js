const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const tokenAuthentication = require('../middleware/authMiddleware');

router.post('/', tokenAuthentication,createProduct);
router.get('/', tokenAuthentication, getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
