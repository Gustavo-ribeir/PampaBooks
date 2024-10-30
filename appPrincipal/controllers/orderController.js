const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT_ORDER;
const orderServiceUrl = `http://localhost:${port}/api/orders`; 


exports.createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    const response = await axios.post(orderServiceUrl, {
      user: userId,
      products,
      totalAmount
    });

    res.status(201).json(response.data);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;

    const response = await axios.get(`${orderServiceUrl}/user/${userId}`);

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar pedidos do usuário:', error);
    res.status(500).json({ message: 'Erro ao buscar pedidos do usuário', error });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const response = await axios.put(`${orderServiceUrl}/${orderId}/status`, {
      status
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao atualizar status do pedido:', error);
    res.status(500).json({ message: 'Erro ao atualizar status do pedido', error });
  }
};
