const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Microserviço Users conectado ao banco...');
  }).catch(err=>{
    console.error('Erro ao se conectar no banco de dados\n',err)
  });

const app = express();
const port = process.env.PORT;

app.use(express.json());


app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor de usuários rodando na porta ${port}`);
});
