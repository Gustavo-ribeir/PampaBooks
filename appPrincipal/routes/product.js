const express = require('express');
const router = express.Router();
const productService = require('../controllers/productController');

router.get('/', async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.render('products', { products });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produtos', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.render('productDetail', { product });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produto', error });
  }
});

module.exports = router;
