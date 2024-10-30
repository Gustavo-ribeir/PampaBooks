const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT_USER
const userServiceUrl =`http://localhost:${port}/api/users`;

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await axios.post(`${userServiceUrl}/register`, { name, email, password });

    res.status(201).json(response.data);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário', error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;


    const response = await axios.post(`${userServiceUrl}/login`, { email, password });

    const { token } = response.data;
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login', error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const response = await axios.get(`${userServiceUrl}/users`, {
      headers: {
        Authorization: `Bearer ${req.token}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
};
