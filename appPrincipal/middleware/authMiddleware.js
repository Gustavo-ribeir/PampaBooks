const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config();
const secret = process.env.JWT_SECRET;
console.log('Chave secreta carregada:', secret);

const isAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Cabeçalho de autenticação recebido:', authHeader);

  if (!authHeader) {
      console.log('Nenhum cabeçalho de autenticação encontrado.');
      return res.redirect('/login');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
      console.log('Token ausente ou formato incorreto.');
      return res.redirect('/login');
  }

  jwt.verify(token, secret, (err, client) => {
      if (err) {
          console.log('Erro na verificação do token:', err);
          return res.redirect('/login');
      }

      req.client = client;
      next();
  });
};

exports.isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Acesso negado. Somente administradores podem realizar esta ação.' });
  }
  next();
};


module.exports = isAuthenticated;