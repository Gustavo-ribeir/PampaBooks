require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const bcypt = require('bcrypt');
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth',authRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Microserviço de autenticação conectado ao banco');
}).catch((erro)=>{
    console.error('Erro ao conectar ao mongodb\n',erro);
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log('Microserviço de autenticação rodando...');
});