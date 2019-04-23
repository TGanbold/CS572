var path = require('path');
var jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
var express = require('express');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var protectedRouter = require('./routes/protected');

var app = express();

const isValidToken = function(token) {
  if(!token) return false;

  try {
    jwt.verify(token, KEY);
    return true;
  } catch(e) {
    return false;
  }
}

KEY = 'asdfghjjkl';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/protected',  async (req, res, next) => {
  const token = req.headers.token;
  if(!isValidToken(token)) return res.status(400).json({ message: 'Not Authorized'});
  next();
});
app.use('/protected', protectedRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
module.exports = app;
