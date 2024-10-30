const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.use('/api/products', productRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Microserviço de produtos conectado ao banco...');
  }).catch(err=>{
    console.error('Erro ao se conectar no banco de dados\n',err)
  });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});