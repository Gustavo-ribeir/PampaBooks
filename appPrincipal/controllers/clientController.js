const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/client');
const {validationResult} = require ('express-validator');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

exports.clientRegister = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
  const { name, email, password } = req.body;
  try {
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Usuário já registrado.' });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newClient = new Client({ name, email, password: hashedPassword });
    await newClient.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário.', error });
  }
};

exports.clientLogin = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    const { email, password } = req.body;
    try {
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: 'Usuário não localizado.' });
        }

    const isPasswordValid = await bcrypt.compare(password, client.password);
    console.log('Senha válida:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Senha inválida.');
      return res.status(401).json({ message: 'Senha inválida' });
    }
      const accessToken = jwt.sign({ id: client.id }, secret, { expiresIn: '1h' });
      res.json({ accessToken });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login.', error });
  }
};