var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const isAuthenticated = require('./middleware/authMiddleware');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const contactRouter = require('./routes/contact');
const productRouter = require('./routes/product');
const adminRouter = require('./routes/admin');
var app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('Conectado ao banco...');
}).catch(err=>{
  console.error('Erro ao se conectar no banco de dados\n',err)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout','layout');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/',contactRouter);
app.use('/products', productRouter);
app.use('/admin', adminRouter); 


app.get('/index',(req,res)=>{
  res.render('index',{title:'Home'});
});
app.get('/login',(req,res)=>{
  res.render('login',{title:'Login'});
});
app.get('/register', (req, res) => {
  res.render('register',{title:'Cadastro'});
});
app.get('/about',(req,res)=>{
  res.render('about',{title:'Sobre nós'});
});
app.get('/profile',isAuthenticated,(req,res)=>{
  res.render('profile',{title:'Perfil'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port,()=>{
  console.log(`Servidor rodando em http://localhost:${port}`);
});
module.exports = app;
