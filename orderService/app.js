const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use('/api/orders', orderRoutes);

// Conexão com o MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Microserviço de pedidos conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao se conectar ao MongoDB:', err);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Microserviço de pedidos rodando na porta ${port}`);
});
