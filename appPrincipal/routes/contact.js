var express = require('express');
var router = express.Router();
const Prospect = require('../models/prospect');


router.get('/contato', function(req, res, next) {
  res.render('contato', { message: null , title: 'Contato'});
});

router.post('/contato', async function(req, res, next) {
  const { name, email, message } = req.body;

  try {
    const newProspect = new Prospect({ name, email, message });
    await newProspect.save();
    res.render('contato', { message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar prospect:', error);
    res.render('contato', { message: 'Erro ao enviar mensagem.' });
  }
});

module.exports = router;