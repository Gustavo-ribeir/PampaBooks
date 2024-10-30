const express = require('express');
const router = express.Router();
const { createOrder, getAllOrders, getUserOrders, updateOrderStatus } = require('../controllers/orderController');

router.post('/', createOrder);

router.get('/', getAllOrders);

router.get('/user/:userId', getUserOrders);

router.put('/:id/status', updateOrderStatus);

module.exports = router;
